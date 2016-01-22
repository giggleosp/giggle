'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('ApplicationCtrl', ['$rootScope', '$scope', '$location', '$cookies', 'userService', 'authService', 'AUTH_EVENTS', 'USER_ROLES', '$mdToast',
    function ($rootScope, $scope, $location, $cookies, userService, authService, AUTH_EVENTS, USER_ROLES, $mdToast) {

    $scope.userRoles = USER_ROLES;
    $scope.isLoggedIn = authService.isLoggedIn();

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };

    $scope.showSearch = false;

    if ($cookies.get('user') === null) {
        $scope.currentUser = null;

    } else if ($scope.currentUser === null){
      // user is still in session, we need to retrieve his her data from server and reset user
      userService.getSessionUser()
        .then(function (response) {
          if (response.status === 200) {
            $scope.setCurrentUser(response.data);
          }
        }, function (response) {
          if (response.status === 404) {
            $scope.popToast("Something went wrong, please log in again.");
            $scope.currentUser = null;
            $cookies.remove('user');
            $cookies.remove('role');
          }
        });
    }

    var last = {
      bottom: true,
      top: false,
      left: false,
      right: true

    };

    $scope.toastPosition = angular.extend({},last);

    $scope.getToastPosition = function() {
      //sanitizePosition();
      return Object.keys($scope.toastPosition)
        .filter(function(pos) { return $scope.toastPosition[pos]; })
        .join(' ');
    };


    $scope.popToast = function (errorText) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(errorText)
          .position($scope.getToastPosition())
          .hideDelay(3000)
      );
    };

    // user logs out
    $scope.$on(AUTH_EVENTS.logoutSuccess, function (event, args) {
      $scope.setCurrentUser(null);
      clearSessionCookies();
      //window.location.reload(false);
      $scope.menu = [];
      $location.path("/login");
    });

    $scope.$on(AUTH_EVENTS.loginSuccess, function (event, args) {
      $scope.setCurrentUser(args.user);
      $cookies.put('user', args.user.username);
      $cookies.put('role', args.user.role.name);
      //window.location.reload(false);
      $location.path("/");
      $rootScope.$apply();

    });

    // clear session cookies
    function clearSessionCookies() {
      $cookies.remove("user");
      $cookies.remove("role");
    }

  }]);
