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
  'authService',
  '$scope',
  '$state'
];

function VenuesCtrl(authService, $scope, $state) {
  var vm = this;

  vm.isLoggedIn = authService.isLoggedIn();
  //vm.venues = venues;

  vm.tabs = [
    { title: 'Recommended' },
    { title: 'Favourites' },
    { title: 'Yours '}
  ];
  vm.selectedIndex = 0;
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
