'use strict';

/**
 * @ngdoc function
 * @name app.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('SignUpCtrl', function ($scope, userApiService) {

  	$scope.signup = function () {
      userApiService.addUser($scope.user)
        .then(function (response) {

          if (response.status === 200) {
            // successful sign up

          } else {
            alert("Woops, something went wrong! :/");
          }

        });
    }
  });
