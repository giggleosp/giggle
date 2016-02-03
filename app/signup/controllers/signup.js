'use strict';

/**
 * @ngdoc function
 * @name app.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the app
 */

angular.module('app.controllers')
  .controller('SignUpCtrl', ['$log', '$scope', 'authService', function ($log, $scope, authService) {

    $scope.signup = function (user) {
      if ($scope.signupForm.$valid) {
        authService.addUser(user);
      }
    };

  }]);
