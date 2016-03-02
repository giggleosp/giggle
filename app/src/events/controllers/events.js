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
  'eventsApiService',
  '$scope',
  '$state'
];

function EventsCtrl(authService, eventsApiService, $scope, $state) {
  var vm = this;
  vm.state = $state;

  vm.isLoggedIn = authService.isLoggedIn();

  var user = null;
  if (vm.isLoggedIn) {
    user = authService.getCurrentUser();
  }
  vm.tabs = [
    { title: 'Recommended' },
    { title: 'Following' }
  ];

  preSelectCorrectTab();

  function preSelectCorrectTab() {
    if (vm.state.includes("events.recommended")) {
      vm.selectedIndex = 0;
      getRecommendedEvents(user)
    } else if (vm.state.includes("events.following")) {
      vm.selectedIndex = 1;
    }
  }

  function getRecommendedEvents(user) {
    eventsApiService.getRecommendedEvents(user)
      .then(function (response) {
        vm.events = response.data;
      });
  }

  $scope.$watch('vm.selectedIndex', function (current, old) {
    if (current != old) {
      switch (current)
      {
        case 0:
          vm.state.transitionTo('events.recommended');
          alert("1");
          getRecommendedEvents(user);
          break;
        case 1:
          vm.state.transitionTo('events.following');
          break;
      }
    }
  });

}
