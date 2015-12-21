'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('ApplicationCtrl', ['$scope', '$mdSidenav', '$location', 'authService', 'USER_ROLES', function ($scope, $mdSidenav, $location, authService, USER_ROLES) {
    // TODO: http://fdietz.github.io/recipes-with-angular-js/urls-routing-and-partials/using-route-location-to-implement-a-navigation-menu.html

    $scope.menuClass = function(page) {
      var current = $location.path().substring(1);
      return page === current ? "active": "";
    };

    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isLoggedIn = authService.isLoggedIn();

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };

    // open/close side nav
    $scope.toggleSideNav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };

    // TODO: http://codepen.io/kyleledbetter/pen/gbQOaV?editors=110
    // define navigation menu items
    $scope.menu = [
      {
        link: '#/',
        title: 'Home',
        icon: 'home'
      },
      {
        link: '',
        title: 'Gigs',
        icon: 'local_activity'
      },
      {
        link: '',
        title: 'Acts',
        icon: 'music_note'
      },
      {
        link: '',
        title: 'Venues',
        icon: 'local_bar'
      }
      //{
      //  link: '',
      //  title: '',
      //  icon: ''
      //}
    ];
    // define navigation menu items

    if ($scope.isLoggedIn) {
      $scope.admin = [
        {
          link: '',
          title: 'Account',
          icon: 'account_circle'
        },
        {
          link: '',
          title: 'Logout',
          icon: 'exit_to_app'
        }
        //{
        //  link: '',
        //  title: '',
        //  icon: ''
        //}
      ];
    } else {
      $scope.admin = [
        {
          link: '#/login',
          title: 'Login',
          icon: 'person'
        },
        {
          link: '#/sign-up',
          title: 'Sign Up',
          icon: 'person_add'
        }
        //{
        //  link: '',
        //  title: '',
        //  icon: ''
        //}
      ];
    }

    $scope.showSearch = false;

  }]);
