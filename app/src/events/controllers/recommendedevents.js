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
  'eventsApiService', 'dateService', 'layoutService', '$log'
];

function RecommendedEventsCtrl(eventsApiService, dateService, layoutService, $log) {
  var vm = this;

  vm.eventIsThisYear = eventIsThisYear;

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
