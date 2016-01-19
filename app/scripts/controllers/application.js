'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('ApplicationCtrl', function ($log, $scope, $mdSidenav, $location, authService, USER_ROLES) {
    // TODO: http://fdietz.github.io/recipes-with-angular-js/urls-routing-and-partials/using-route-location-to-implement-a-navigation-menu.html

    $scope.showSearch = false;
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isLoggedIn = authService.isLoggedIn();

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };

  })
  .controller('NavigationCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil) {

    $scope.toggleLeft = buildToggler('left');
    $scope.lockLeft = false;

    $scope.menu = [
      {
        link: '#/',
        title: 'Home',
        icon: 'home'
      },
      {
        title: 'Events',
        icon: 'local_activity',
        sub_items: [
          {
            title: 'All Events',
            link: ''
          },
          {
            title: 'Local',
            link: ''
          },
          {
            title: 'Music',
            link: ''
          },
          {
            title: 'Sport',
            link: ''
          },
          {
            title: 'Theatre',
            link: ''
          },
          {
            title: 'Comedy',
            link: ''
          },
          {
            title: 'Festivals',
            link: ''
          }
        ]
      },
      {
        title: 'Acts',
        icon: 'music_note',
        sub_items: [
          {
            title: 'All Acts',
            link: ''
          },
          {
            title: 'Local',
            link: ''
          },
          {
            title: 'Music',
            link: ''
          },
          {
            title: 'Sport',
            link: ''
          },
          {
            title: 'Theatre',
            link: ''
          },
          {
            title: 'Comedy',
            link: ''
          }
        ]
      },
      {
        title: 'Venues',
        icon: 'local_bar',
        sub_items: [
          {
            title: 'All Events',
            link: ''
          },
          {
            title: 'Local',
            link: ''
          }
        ]
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

    function buildToggler(navId) {
      return $mdUtil.debounce(function () {
        $mdSidenav(navId)
          .toggle();
      }, 300);
    }

    // toggle main navigation
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $scope.lockLeft = !$scope.lockLeft;
        });
    };

    // open/close side nav on mobile/smallscreens
    $scope.toggleSideNav = function (menuId) {
      $mdSidenav(menuId).toggle().then(function () {
        $scope.sideNavIsOpen = !$scope.sideNavIsOpen;
      });

      $scope.isSidenavOpen = !$scope.isSidenavOpen;

    };
  });

