'use strict';

/**
 * @ngdoc function
 * @name app.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('LoginCtrl', ['$log', '$scope', 'authService', function ($log, $scope, authService) {

    $scope.user = {
        username: "foobar5",
        password: "0876235718ep!"
    }
    
    $scope.login = function (user) {
      if ($scope.loginForm.$valid) {
        authService.login(user);
      }
    };

  }]);
