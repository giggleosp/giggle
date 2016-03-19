'use strict';

/**
 * @ngdoc function
 * @name app.controller:RecommendedEventsCtrl
 * @description
 * # RecommendedeventsCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('RecommendedEventsCtrl', RecommendedEventsCtrl);

RecommendedEventsCtrl.$inject = [
  'authService', 'eventsApiService', 'dateService', 'layoutService', '$log', '$state'
];

function RecommendedEventsCtrl(authService, eventsApiService, dateService, layoutService, $log, $state) {
  var vm = this;

  vm.eventIsThisYear = eventIsThisYear;

  vm.currentUser = authService.getCurrentUser();

  init();

  function init() {
    vm.cardsPerRow = layoutService.getNumberOfCardsPerRow();
    getEvents();
  }

  function getEvents() {
    eventsApiService.getEvents()
      .then(function (response) {
        vm.events = response.data;
        $log.info(vm.events);
      });
  }

  function eventIsThisYear(date) {
    return dateService.isThisYear(date);
  }

}
