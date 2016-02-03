'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('ApplicationCtrl', ['$log', '$rootScope', '$scope', '$location', '$cookies', 'userService', 'authService', 'AUTH_EVENTS', 'USER_ROLES', '$mdToast', function ($log, $rootScope, $scope, $location, $cookies, userService, authService, AUTH_EVENTS, USER_ROLES, $mdToast) {

    $scope.menu = getMenuItems();
    $scope.mobileMenu = getMobileMenuItems();

    $scope.userRoles = USER_ROLES;
    $scope.isLoggedIn = authService.isLoggedIn();

    $scope.showSearch = false; // decides whether search bar is showing

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };

    // user logs out
    $scope.$on(AUTH_EVENTS.logoutSuccess, function () {
      $scope.currentUser = null;
      $scope.isLoggedIn = authService.isLoggedIn();
      $scope.menu = getMenuItems();
      $location.path("/sign-in");
    });

    // successful login
    $scope.$on(AUTH_EVENTS.loginSuccess, function (event, args) {
      $scope.setCurrentUser(args.user);
      $scope.isLoggedIn = authService.isLoggedIn();
      $scope.menu = getMenuItems();
    });


    $scope.$on(AUTH_EVENTS.loginFailed, function (event, args) {

      if (args.data === null) {
        $scope.popToast("Incorrect username or password.");

      } else if (args.status != null) {
        var status = args.status;

        if (status === 500) {
          $scope.popToast("Internal server error");

        } else if (status === 102 || status === 400 || status === 503) {

          $scope.popToast("There was a problem connecting to the servers");

        } else {
          $scope.popToast("Woops! Something went wrong");
        }
      }

    });

    function getMenuItems() {
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
              isVisible: !$scope.isLoggedIn
            },
            {
              title: "Sign Up",
              href: "#/sign-up",
              icon: {
                text: "person_add",
                md: true
              },
              isVisible: !$scope.isLoggedIn
            },
            {
              title: "Dashboard",
              href: "",
              icon: {
                text: "settings",
                md: true
              },
              isVisible: $scope.isLoggedIn
            },
            {
              title: "Log Out",
              href: "",
              icon: {
                text: "person_outline",
                md: true
              },
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

    function getMobileMenuItems() {
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
              isVisible: !$scope.isLoggedIn
            },
            {
              title: "Sign Up",
              href: "#/sign-up",
              icon: {
                text: "person_add",
                md: true
              },
              isVisible: !$scope.isLoggedIn
            },
            {
              title: "Log Out",
              href: "",
              icon: {
                text: "person_outline",
                md: true
              },
              isVisible: $scope.isLoggedIn
            }
          ]
        }
      ];
    }


    // toast position
    var position = {
      bottom: true,
      top: false,
      left: false,
      right: true

    };

    $scope.toastPosition = angular.extend({},position);

    $scope.getToastPosition = function() {
      return Object.keys($scope.toastPosition)
        .filter(function(pos) { return $scope.toastPosition[pos]; })
        .join(' ');
    };

    $scope.popToast = function (textContent) {
      var toast = $mdToast.simple()
        .textContent(textContent)
        .action('OK')
        .highlightAction(true)
        .position($scope.getToastPosition());
      $mdToast.show(toast);
    };

  }]);
