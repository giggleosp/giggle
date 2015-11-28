'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('controllers', [])
  .controller('MainCtrl', function ($scope, userService) {

    userService.allUsers()
      .success(function (data) {
        console.log(data);
      }).error(function (response) {
        console.log(response);
      });

  });
