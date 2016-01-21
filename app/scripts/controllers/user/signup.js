'use strict';

/**
 * @ngdoc function
 * @name app.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the app
 */

angular.module('app.controllers')
  .controller('SignUpCtrl', ['$log', '$scope', 'authService', '$rootScope', function ($log, $scope, authService, $rootScope) {

    $scope.signup = function (user) {

      if ($scope.signupForm.$valid) {

        authService.addUser(user)
         .then(function (response) {
           if (response.status === 200) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, { user: response.data });
           }

         }, function (status) {
            $log.debug(response);
            if (response.status === 500) {
              $scope.popToast("Internal server error!");
            } else if (response.status === 400) {
              $scope.popToast("Something went wrong!");
            } else if (response.status === 503) {
              $scope.popToast("Looks like the servers are down!");
            } else if (response.status === 102) {
              $scope.popToast("Could not connect to servers!");
            }

         });
      }
    }

  }]);
