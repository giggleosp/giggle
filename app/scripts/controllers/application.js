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
  .controller('NavigationCtrl', function ($log, $scope, $timeout, $mdSidenav, $mdUtil) {

    $scope.toggleLeft = buildToggler('left');
    $scope.lockLeft = true;

    $scope.menu = [
      {
        title: "General",
        items: [
          {
            title: "Home",
            href: "#/",
            icon: "home",
            md: true,
            isVisible: true
          },
          {
            title: "Log In",
            href: "#/login",
            icon: "person",
            md: true,
            isVisible: !$scope.isLoggedIn
          },
          {
            title: "Sign Up",
            href: "#/sign-up",
            icon: "person_add",
            md: true,
            isVisible: !$scope.isLoggedIn
          },
          {
            title: "Profile",
            href: "",
            icon: "account_circle",
            md: true,
            isVisible: $scope.isLoggedIn
          },
          {
            title: "Settings",
            href: "",
            icon: "settings",
            md: true,
            isVisible: $scope.isLoggedIn
          },
          {
            title: "Log Out",
            href: "#/login",
            icon: "account_circle",
            md: true,
            isVisible: $scope.isLoggedIn
          }
        ]
      },
      {
        title: "Events",
        items: [
          {
            title: "All",
            href: "",
            icon: "local_activity",
            md: true,
            isVisible: true
          },
          {
            title: "Local",
            href: "",
            icon: "location_on",
            md: true,
            isVisible: true
          },
          {
            title: "Music",
            href: "",
            icon: "music_note",
            md: true,
            isVisible: true
          },
          {
            title: "Sports",
            href: "",
            icon: "fa fa-futbol-o",
            md: false,
            isVisible: true
          },
          {
            title: "Theatre",
            href: "",
            icon: "theaters",
            md: true,
            isVisible: true
          },
          {
            title: "Comedy",
            href: "",
            icon: "tag_faces",
            md: true,
            isVisible: true
          },
          {
            title: "Festivals",
            href: "",
            icon: "library_music",
            md: true,
            isVisible: true
          }
        ]
      },
      {
        title: "Acts",
        items: [
          {
            title: "All",
            href: "",
            icon: "local_play",
            md: true,
            isVisible: true
          },
          {
            title: "Local",
            href: "",
            icon: "location_on",
            md: true,
            isVisible: true
          },
          {
            title: "Music",
            href: "",
            icon: "music_note",
            md: true,
            isVisible: true
          },
          {
            title: "Sports",
            href: "",
            icon: "fa fa-futbol-o",
            md: false,
            isVisible: true
          },
          {
            title: "Theatre",
            href: "",
            icon: "theaters",
            md: true,
            isVisible: true
          },
          {
            title: "Comedy",
            href: "",
            icon: "tag_faces",
            md: true,
            isVisible: true
          },
          {
            title: "Festivals",
            href: "",
            icon: "library_music",
            md: true,
            isVisible: true
          }
        ]
      },
      {
        title: "Venues",
        items: [
          {
            title: "All",
            href: "",
            icon: "local_play",
            md: true,
            isVisible: true
          },
          {
            title: "Local",
            href: "",
            icon: "location_on",
            md: true,
            isVisible: true
          },
          {
            title: "Bars",
            href: "",
            icon: "local_bar",
            md: true,
            isVisible: true
          },
          {
            title: "Music",
            href: "",
            icon: "music_note",
            md: true,
            isVisible: true
          },
          {
            title: "Sports",
            href: "",
            icon: "fa fa-futbol-o",
            md: false,
            isVisible: true
          },
          {
            title: "Theatre",
            href: "",
            icon: "theaters",
            md: true,
            isVisible: true
          }
        ]
      }
    ];


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

