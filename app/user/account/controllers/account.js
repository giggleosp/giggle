'use strict';

/**
 * @ngdoc function
 * @name app.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('AccountCtrl', AccountCtrl);

  AccountCtrl.$inject = [
    '$mdDialog',
    '$mdMedia'
  ];

  function AccountCtrl ($mdDialog) {
    var vm = this;

    vm.editAccount = editAccount;

    function editAccount(event) {
      $mdDialog.show({
        templateUrl: 'user/account/views/editaccount.tpl.html',
        parent: angular.element(document.body),
        targetEvent: event,
        controller: 'EditAccountCtrl',
        controllerAs: 'vm'
      });
    }
  }
