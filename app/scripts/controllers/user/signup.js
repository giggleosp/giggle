'use strict';

/**
 * @ngdoc function
 * @name app.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the app
 */

angular.module('app.controllers')
  .controller('SignUpCtrl', ['$log', '$scope', 'authService', '$rootScope', 'AUTH_EVENTS', function ($log, $scope, authService, $rootScope, AUTH_EVENTS) {

    $scope.signup = function (user) {

      if ($scope.signupForm.$valid) {

        authService.addUser(user)
         .then(function (response) {
           if (response.status === 200) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, { user: response.data });
           }
         }, function (response) {
           $rootScope.$broadcast(AUTH_EVENTS.loginFailed, { status: response.status });
         });
      }
    }

  }]);
