'use strict';

/**
 * @ngdoc function
 * @name app.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('SignUpCtrl', ['$scope', 'userApiService', '$location', function ($scope, userApiService, $location) {

  	$scope.signup = function (user) {

      userApiService.addUser(user)
        .then(function (response) {
          if (status === 200) {
            
          }
        }, function (response) {

        });
    }
  }]);
