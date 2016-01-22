'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('NavigationCtrl', ['$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log',  function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {

    $scope.menu = [
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
            title: "Log In",
            href: "#/login",
            icon: {
              text: "person",
              md: true
            },
            isVisible: !$scope.isLoggedIn
          },
          {
            title: "Sign Up",
            href: "#/signup",
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

    $scope.lockLeft = true;

    // toggle sidenav open/closed
    $scope.toggleSidenav = function (navID) {
      if (navID === "left") {
        $mdSidenav(navID).close()
          .then(function () {
            $scope.lockLeft = !$scope.lockLeft;
          });
      } else {
        $mdSidenav(navID).toggle();
      }
    };

  }]);
