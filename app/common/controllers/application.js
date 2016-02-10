'use strict';

/**
 * @ngdoc function
 * @name app.controller:ApplicationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('ApplicationCtrl', ApplicationCtrl);

  ApplicationCtrl.$inject = [
    '$scope',
    'authService',
    'navigationMenuService',
    'AUTH_EVENTS',
    '$cookies',
    '$mdDialog'
  ];

function ApplicationCtrl($scope, authService, navigationMenuService, AUTH_EVENTS, $cookies, $mdDialog) {
  var vm = this;

    // user context & state
    getCurrentUser();

    // set up menu
    setMenuItems();

    // mobile search bar visibility
    vm.showSearch = false;

    function getCurrentUser() {
      var username = $cookies.get("user");
      authService.getUserWithUsername(username);
    }

    function setMenuItems () {
      vm.menu = navigationMenuService.getMenuItems(vm.isLoggedIn);
      vm.mobileMenu = navigationMenuService.getMobileMenuItems(vm.isLoggedIn);
    }


    // broadcast events used to control application state
    $scope.$on(AUTH_EVENTS.loginSuccess, function (event, args) {
      vm.currentUser = authService.getCurrentUser();
      vm.isLoggedIn = authService.isLoggedIn();
      setMenuItems();

      if (args.isNewUser) {
          $mdDialog.show({
          templateUrl: 'user/account/views/account.tpl.html',
          parent: angular.element(document.body),
          controller: 'EditAccountCtrl',
          controllerAs: 'vm'
        });

      }

    });

    $scope.$on(AUTH_EVENTS.logoutSuccess, function () {
      vm.currentUser = authService.getCurrentUser();
      vm.isLoggedIn = authService.isLoggedIn();
      setMenuItems();
    });

    $scope.$on("user-updated", function (event, args) {
      vm.currentUser = args.user;
      authService.setCurrentUser(vm.currentUser);
    });

  }
