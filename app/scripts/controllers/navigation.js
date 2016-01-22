'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('NavigationCtrl', ['$location', 'AUTH_EVENTS', '$rootScope', '$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log', function ($location, AUTH_EVENTS, $rootScope, $scope, $timeout, $mdSidenav, $mdUtil, $log) {

    $scope.lockLeft = false;

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
