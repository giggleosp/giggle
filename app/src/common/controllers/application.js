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
    '$scope', 'authService', 'navigationMenuService', 'AUTH_EVENTS',
    '$cookies', '$mdDialog', '$mdSidenav', '$rootScope'
  ];

function ApplicationCtrl($scope, authService, navigationMenuService, AUTH_EVENTS, $cookies, $mdDialog, $mdSidenav, $rootScope) {
  var vm = this;

  // opened state of menu
  vm.lockLeft = true;

  vm.toggleSidenav = toggleSidenav;
  vm.editAccount = editAccount;

  init();


  function init() {
    // user context & state
    getCurrentUser();
    // set up menu
    setMenuItems();
    // mobile search bar visibility
    vm.showSearch = false;
  }

  function getCurrentUser() {
    var username = $cookies.get("user");
    if(username) {
      authService.getUserWithUsername(username);
    }
  }

  function setMenuItems () {
    vm.menu = navigationMenuService.getMenuItems(vm.isLoggedIn);
    vm.mobileMenu = navigationMenuService.getMobileMenuItems(vm.isLoggedIn);
  }

  function editAccount(event) {
    $mdDialog.show({
      templateUrl: 'src/user/account/views/editaccount.tpl.html',
      parent: angular.element(document.body),
      targetEvent: event,
      controller: 'EditAccountCtrl',
      controllerAs: 'vm'
    });
  }

  function toggleSidenav (id) {
    if (id === "left") {
      $mdSidenav(id).close()
        .then(function () {
          vm.lockLeft = !vm.lockLeft;
          setMenuChangedState(vm.lockLeft);
        });
    } else {
      $mdSidenav(id).toggle();
    }

  }

  function setMenuChangedState(lockLeft) {
    navigationMenuService.setOpenedState(lockLeft);
    $rootScope.$broadcast("navigation-menu-state-changed");
  }


  // broadcast events used to control application state
  $scope.$on(AUTH_EVENTS.loginSuccess, function (event, args) {
    vm.currentUser = authService.getCurrentUser();
    vm.isLoggedIn = authService.isLoggedIn();
    setMenuItems();

    if (args.isNewUser) {
      $mdDialog.show({
        templateUrl: 'src/user/account/views/editaccount.tpl.html',
        parent: angular.element(document.body),
        controller: 'EditAccountCtrl',
        controllerAs: 'vm',
        locals: {
          isNewUser: true
        }
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

  $scope.$on('$stateChangeStart', function() {
    vm.showProgress = true;
  });

  $scope.$on('$stateChangeSuccess', function() {
    vm.showProgress = false;
  });

}
