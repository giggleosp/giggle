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
    'AUTH_EVENTS'
  ];

  function ApplicationCtrl($scope, authService, AUTH_EVENTS) {
    var vm = this;

    // arrays containing navigation menu items
    var menuItems = [
      {
        title: "General",
        items: [
          {
            title: "Home",
            href: "#/",
            icon: {
              text: "home",
              md: true
            },
            isVisible: true
          },
          {
            title: "Sign In",
            href: "#/sign-in",
            icon: {
              text: "person",
              md: true
            },
            isVisible: !vm.isLoggedIn
          },
          {
            title: "Sign Up",
            href: "#/sign-up",
            icon: {
              text: "person_add",
              md: true
            },
            isVisible: !vm.isLoggedIn
          },
          {
            title: "Dashboard",
            href: "",
            icon: {
              text: "settings",
              md: true
            },
            isVisible: vm.isLoggedIn
          },
          {
            title: "Log Out",
            href: "",
            icon: {
              text: "person_outline",
              md: true
            },
            isVisible: vm.isLoggedIn
          }
        ]
      },
      {
        title: "Events",
        items: [
          {
            title: "All",
            href: "",
            icon: {
              text: "local_activity",
              md: true
            },
            isVisible: true
          },
          {
            title: "Local",
            href: "",
            icon: {
              text: "location_on",
              md: true
            },
            isVisible: true
          },
          {
            title: "Music",
            href: "",
            icon: {
              text: "music_note",
              md: true
            },
            isVisible: true
          },
          {
            title: "Sports",
            href: "",
            icon: {
              text: "fa fa-futbol-o",
              md: false
            },
            isVisible: true
          },
          {
            title: "Theatre",
            href: "",
            icon: {
              text: "theaters",
              md: true
            },
            isVisible: true
          },
          {
            title: "Comedy",
            href: "",
            icon: {
              text: "tag_faces",
              md: true
            },
            isVisible: true
          },
          {
            title: "Festivals",
            href: "",
            icon: {
              text: "library_music",
              md: true
            },
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
            icon: {
              text: "local_play",
              md: true
            },
            isVisible: true
          },
          {
            title: "Local",
            href: "",
            icon: {
              text: "location_on",
              md: true
            },
            isVisible: true
          },
          {
            title: "Music",
            href: "",
            icon: {
              text: "music_note",
              md: true
            },
            isVisible: true
          },
          {
            title: "Sports",
            href: "",
            icon: {
              text: "fa fa-futbol-o",
              md: false
            },
            isVisible: true
          },
          {
            title: "Theatre",
            href: "",
            icon: {
              text: "theaters",
              md: true
            },
            isVisible: true
          },
          {
            title: "Comedy",
            href: "",
            icon: {
              text: "tag_faces",
              md: true
            },
            isVisible: true
          },
          {
            title: "Festivals",
            href: "",
            icon: {
              text: "library_music",
              md: true
            },
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
            icon: {
              text: "local_play",
              md: true
            },
            isVisible: true
          },
          {
            title: "Local",
            href: "",
            icon: {
              text: "location_on",
              md: true
            },
            isVisible: true
          },
          {
            title: "Bars",
            href: "",
            icon: {
              text: "local_bar",
              md: true
            },
            isVisible: true
          },
          {
            title: "Music",
            href: "",
            icon: {
              text: "music_note",
              md: true
            },
            isVisible: true
          },
          {
            title: "Sports",
            href: "",
            icon: {
              text: "fa fa-futbol-o",
              md: false
            },
            isVisible: true
          },
          {
            title: "Theatre",
            href: "",
            icon: {
              text: "theaters",
              md: true
            },
            isVisible: true
          }
        ]
      }
    ];
    var mobileMenuItems = [
      {
        title: "General",
        items: [
          {
            title: "Home",
            href: "#/",
            icon: {
              text: "home",
              md: true
            },
            isVisible: true
          },
          {
            title: "Events",
            href: "",
            icon: {
              text: "event",
              md: true
            },
            isVisible: true
          },
          {
            title: "Acts",
            href: "",
            icon: {
              text: "local_play",
              md: true
            },
            isVisible: true
          },
          {
            title: "Venues",
            href: "",
            icon: {
              text: "local_bar",
              md: true
            },
            isVisible: true
          }
        ]
      },
      {
        title: "Account",
        items: [
          {
            title: "Sign In",
            href: "#/sign-in",
            icon: {
              text: "person",
              md: true
            },
            isVisible: !vm.isLoggedIn
          },
          {
            title: "Sign Up",
            href: "#/sign-up",
            icon: {
              text: "person_add",
              md: true
            },
            isVisible: !vm.isLoggedIn
          },
          {
            title: "Log Out",
            href: "",
            icon: {
              text: "person_outline",
              md: true
            },
            isVisible: vm.isLoggedIn
          }
        ]
      }
      ];

    // menu
    setMenuItems();

    // user context & state
    vm.currentUser = null;
    vm.isLoggedIn = false;

    // mobile search bar visibility
    vm.showSearch = false;

    function setCurrentUser (user) {
      vm.currentUser = user;
    }

    function setMenuItems () {
      vm.menu = menuItems;
      vm.mobileMenu = mobileMenuItems;
    }

    // broadcast events used to control application state
    $scope.$on(AUTH_EVENTS.loginSuccess, function (event, args) {
      setCurrentUser(args.data);
    });

    $scope.$on(AUTH_EVENTS.logoutSuccess, function () {
      vm.currentUser = null;
      vm.isLoggedIn = authService.isLoggedIn();
      setMenuItems();
    });

    $scope.$on(AUTH_EVENTS.loginFailed, function () {
      vm.isLoggedIn = authService.isLoggedIn();
      setMenuItems();
    });

  }
