'use strict';

/**
 * @ngdoc function
 * @name app.controller:EventstabCtrl
 * @description
 * # EventstabCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('EventsCtrl', EventsCtrl);

EventsCtrl.$inject = [
  'authService',
  '$scope',
  '$state'
];

function EventsCtrl(authService, $scope, $state) {
  var vm = this;
  vm.state = $state;

  vm.isLoggedIn = authService.isLoggedIn();

  vm.tabs = [
    { title: 'Recommended' },
    { title: 'Following' }
  ];

  preSelectCorrectTab();

  function preSelectCorrectTab() {
    if ($state.includes("events.recommended")) {
      vm.selectedIndex = 0;
    } else if ($state.includes("events.following")) {
      vm.selectedIndex = 1;
    }
  }
  $scope.$watch('vm.selectedIndex', function (current, old) {
    if (current != old) {
      switch (current)
      {
        case 0:
          $state.transitionTo('events.recommended');
          break;
        case 1:
          $state.transitionTo('events.following');
          break;
      }
    }
  });

}
