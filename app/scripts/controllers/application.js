'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('ApplicationCtrl', ['$scope', '$location', 'authService', 'USER_ROLES', function ($scope, $location, authService, USER_ROLES) {
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
    }

  }]);
