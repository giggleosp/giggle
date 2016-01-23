'use strict';

/**
 * @ngdoc function
 * @name app.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('LoginCtrl', ['$location', '$log', '$scope', '$rootScope', 'authService', 'AUTH_EVENTS', function ($location, $log, $scope, $rootScope, authService, AUTH_EVENTS) {

    $scope.login = function(user) {

      if ($scope.loginForm.$valid) {
        authService.login(user)
          .then(function (response) {
            $log.debug(response);
            if (response.status === 200) { // OK
              $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, { user: response.data });
            }
          }, function (response) {
            $scope.loginForm.$invalid = true;
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed, { status: response.status });
          });
      }
    };

  }]);
