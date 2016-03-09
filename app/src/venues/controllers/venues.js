'use strict';

/**
 * @ngdoc function
 * @name app.controller:VenuesctrlCtrl
 * @description
 * # VenuesctrlCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('VenuesCtrl', VenuesCtrl);

VenuesCtrl.$inject = [
  'authService', '$scope', '$state'
];

function VenuesCtrl(authService, $scope, $state) {
  var vm = this;
  vm.state = $state;

  vm.isLoggedIn = authService.isLoggedIn();

  vm.tabs = [
    { title: 'Recommended' },
    { title: 'Favourites' },
    { title: 'Yours' }
  ];

  preSelectCorrectTab();

  function preSelectCorrectTab() {
    if ($state.includes("venues.recommended")) {
      vm.selectedIndex = 0;
    } else if ($state.includes("venues.favourites")) {
      vm.selectedIndex = 1;
    } else if ($state.includes("venues.yours")) {
      vm.selectedIndex = 2;
    }
  }

  $scope.$watch('vm.selectedIndex', function (current, old) {
    if (current != old) {
      switch (current)
      {
        case 0:
          $state.transitionTo('venues.recommended');
              break;
        case 1:
          $state.transitionTo('venues.favourites');
              break;
        case 2:
          $state.transitionTo('venues.yours');
              break;
      }
    }
  });

}
