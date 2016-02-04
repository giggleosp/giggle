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
    '$mdSidenav'
  ];

  function NavigationCtrl ($mdSidenav) {
    var vm = this;

    // opened state of menu
    vm.lockLeft = false;

    vm.toggleSidenav = toggleSidenav;

    function toggleSidenav (id) {
      if (id === "left") {
        $mdSidenav(id).close()
          .then(function () {
            vm.lockLeft = !vm.lockLeft;
          });
      } else {
        $mdSidenav(id).toggle();
      }
    }

  }
