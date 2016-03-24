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
  '$stateParams', 'authService', 'eventsApiService', '$log'
];

function EventCtrl($stateParams, authService, eventsApiService, $log) {
  var vm = this;

  var eventId = $stateParams.id;
  vm.currentUser = authService.getCurrentUser();

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

}
