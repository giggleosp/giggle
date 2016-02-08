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
    'userApiService',
    'AUTH_EVENTS',
    '$cookies'
  ];

function ApplicationCtrl($scope, authService, userApiService, AUTH_EVENTS, $cookies) {
  var vm = this;

    // user context & state
    getCurrentUser();

    vm.isLoggedIn = authService.isLoggedIn();

    // set up menu
    setMenuItems();

    // mobile search bar visibility
    vm.showSearch = false;

    function setCurrentUser(user) {
      vm.currentUser = user;
    }

    function getCurrentUser() {
      var user = $cookies.get("user");

      if (user != null) {
        userApiService.getUserWithUsername(user)
          .then(function (data) {
           vm.currentUser = data;
          });
      } else {
        vm.currentUser = null;
      }
    }

    function setMenuItems () {
      vm.menu = getMenuItems();
      vm.mobileMenu = getMobileMenuItems();
    }

    function getMenuItems () {
      return [
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
              title: "Account",
              href: "#/account",
              icon: {
                text: "account_circle",
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
    }

    function getMobileMenuItems () {
      return [
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
    }

    // broadcast events used to control application state
    $scope.$on(AUTH_EVENTS.loginSuccess, function (event, args) {
      setCurrentUser(args.user);
      vm.isLoggedIn = authService.isLoggedIn();
      setMenuItems();
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

    $scope.$on("user-updated", function (event, args) {
      setCurrentUser(args.user);
    });

  }
