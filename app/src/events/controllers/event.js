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

  init();

  function init() {
    eventsApiService.getEventWithId(eventId)
      .then(function (response) {
        vm.event = response.data;
        $log.debug(response);
      });
  }

}
