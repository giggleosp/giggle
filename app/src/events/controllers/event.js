'use strict';

/**
 * @ngdoc function
 * @name app.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('EventCtrl', EventCtrl);

EventCtrl.$inject = [
  '$stateParams', '$mdMedia', '$mdDialog', 'authService', 'eventsApiService', 'dateService', '$log'
];

function EventCtrl($stateParams, $mdMedia, $mdDialog, authService, eventsApiService, dateService, $log) {
  var vm = this;

  var eventId = $stateParams.id;
  vm.currentUser = authService.getCurrentUser();

  vm.eventIsThisYear = eventIsThisYear;
  vm.eventIsToday = eventIsToday;
  vm.compareDates = compareDates;
  vm.compareMonths = compareMonths;
  vm.showEventInfo = showEventInfo;

  init();

  function init() {
    getEvent(eventId);
    getEventUser(eventId, vm.currentUser.id);
  }

  function getEvent(eventId) {
    eventsApiService.getEventWithId(eventId)
      .then(function (response) {
        vm.event = response.data;
      });
  }

  function getEventUser(eventId, userId) {
    eventsApiService.getEventUser(eventId, userId)
      .then(function (response) {
        vm.eventUser = response.data;
      });
  }

  function eventIsThisYear(date) {
    return dateService.isThisYear(date);
  }

  function eventIsToday(date) {
    return dateService.isToday(date);
  }

  function compareDates(startDate, endDate) {
    return dateService.compareDates(startDate, endDate);
  }

  function compareMonths(startDate, endDate) {
    return dateService.compareMonths(startDate, endDate);
  }

  function showEventInfo(event) {
    var useFullScreen = $mdMedia('sm') || $mdMedia('xs');
    $mdDialog.show({
      controller: 'EventInfoCtrl',
      controllerAs: 'vm',
      templateUrl: 'src/events/views/partials/events.event.info.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true,
      fullscreen: useFullScreen,
      locals: {
        event: vm.event
      }
    });
  }

}
