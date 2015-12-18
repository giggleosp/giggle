'use strict';

/**
 * @ngdoc function
 * @name app.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('LoginCtrl', ['$scope', '$rootScope', 'authService', 'AUTH_EVENTS',
    function ($scope, $rootScope, authService, AUTH_EVENTS) {

      console.log($scope.currentUser);

    $scope.login = function(credentials) {

      authService.login(credentials)
      .then(function (response) {
        console.log(response);
          if (response.status === 200) { // OK
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(response.data);
            console.log($scope);
          }
        }, function (response) {
          $rootScope.$broadcast(AUTH_EVENTS.loginFailed); // set status application wide

        });
    }

  }]);
