'use strict';

/**
 * @ngdoc function
 * @name app.controller:ActsCtrl
 * @description
 * # ActsCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('ActsCtrl', ActsCtrl);

ActsCtrl.$inject = [
  'authService', '$scope', '$state'
];

function ActsCtrl(authService, $scope, $state) {
  var vm = this;

  vm.isLoggedIn = authService.isLoggedIn();

  vm.tabs = [
    {title: 'Recommended'},
    {title: 'Favourites'},
    {title: 'Yours'}
  ];

  preSelectCorrectTab();

  function preSelectCorrectTab() {
    if ($state.includes("acts.recommended")) {
      vm.selectedIndex = 0;
    } else if ($state.includes("acts.favourites")) {
      vm.selectedIndex = 1;
    } else if ($state.includes("acts.yours")) {
      vm.selectedIndex = 2;
    }
  }

  $scope.$watch('vm.selectedIndex', function (current, old) {
    if (current != old) {
      switch (current) {
        case 0:
          $state.go('acts.recommended');
          break;
        case 1:
          $state.go('acts.favourites');
          break;
        case 2:
          $state.go('acts.yours');
          break;
      }
    }
  });
}
