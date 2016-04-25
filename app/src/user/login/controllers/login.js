'use strict';

/**
 * @ngdoc function
 * @name app.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('LoginCtrl', LoginCtrl);

  // inject into the controller
  LoginCtrl.$inject = [
    'authService'
  ];

  function LoginCtrl(authService) {
    var vm = this;

    vm.login = function(user) {
      authService.login(user)
        .then(function (response) {
          authService.setCredentials(user.username, user.password);
        });
    }
  }

