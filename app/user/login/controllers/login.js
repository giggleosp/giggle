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

    vm.user = {
      username: "foobar",
      password: "0876235718ep!"
    };

    vm.login = function(user) {
      return authService.login(user);
    }
  }

