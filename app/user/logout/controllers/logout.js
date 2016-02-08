'use strict';

/**
 * @ngdoc function
 * @name app.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('LogoutCtrl', LogoutCtrl);

  // inject into the controller
  LogoutCtrl.$inject = [
    'authService',
    '$mdDialog'
  ];

  function LogoutCtrl(authService, $mdDialog) {
    var vm = this;

    vm.logout = function(event) {
      // build event dialog
      var confirm = $mdDialog.confirm()
        .title("Confirm Log Out")
        .textContent("Are you sure you want to log out?")
        .ariaLabel("Confirm Log Out")
        .targetEvent(event)
        .ok("OK")
        .cancel("Cancel");

      // return event dialog and show
      return $mdDialog.show(confirm)
        .then(function () {
          // log out
          authService.logout(event);
        }, function () {
          // do nothing
        });

    }
  }
