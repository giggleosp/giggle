'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the app
 */

angular.module('app.controllers')
  .controller('NavigationCtrl', NavigationCtrl);

  NavigationCtrl.$inject = [
    '$mdSidenav',
    '$mdDialog',
    '$rootScope',
    'navigationMenuService'
  ];

  function NavigationCtrl ($mdSidenav, $mdDialog, $rootScope, navigationMenuService) {
    var vm = this;

    // opened state of menu
    vm.lockLeft = true;

    vm.toggleSidenav = toggleSidenav;
    vm.editAccount = editAccount;

    function editAccount(event) {
      $mdDialog.show({
        templateUrl: 'src/user/account/views/editaccount.tpl.html',
        parent: angular.element(document.body),
        targetEvent: event,
        controller: 'EditAccountCtrl',
        controllerAs: 'vm'
      });
    }
    

  }
