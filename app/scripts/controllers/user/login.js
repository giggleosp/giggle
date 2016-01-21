'use strict';

/**
 * @ngdoc function
 * @name app.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('LoginCtrl', ['$scope', '$rootScope', 'authService', 'AUTH_EVENTS', function ($scope, $rootScope, authService, AUTH_EVENTS) {

    $scope.login = function(user) {

      if ($scope.loginForm.$valid) {
        authService.login(user)
          .then(function (response) {
              if (response.status === 200) { // OK
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, { user: response.data });
              }
            }, function (response) {
              $rootScope.$broadcast(AUTH_EVENTS.loginFailed); // set status application wide
            });
        }
      }

  }]);
