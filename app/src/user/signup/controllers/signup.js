'use strict';

/**
 * @ngdoc function
 * @name app.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('SignUpCtrl', SignUpCtrl);

  // inject into the controller
  SignUpCtrl.$inject = [
    'authService'
  ];

  function SignUpCtrl(authService) {
    var vm = this;

    vm.signup = function(user) {
      authService.createAccount(user);
    }
  }
