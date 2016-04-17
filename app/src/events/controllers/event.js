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
  var relationshipExists = false;
  vm.currentUser = authService.getCurrentUser();
  vm.event = {};
  vm.eventUser = {};

  vm.showEventInfo = showEventInfo;
  vm.clickAttending = clickAttending;

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
        relationshipExists = true;
      }, function () {
        vm.eventUser = {
          user: vm.currentUser,
          event: vm.event,
          attending: false,
          following: false,
          admin: false,
          hidden: false
        };
      });
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

  function clickAttending(eventUser) {
    vm.eventUser.attending = !eventUser.attending;
    updateEventUser();
  }

  function updateEventUser() {
    var eventUser = {
      user: vm.currentUser,
      event: vm.event
    };
    if (!relationshipExists) {
      eventsApiService.createEventUser(eventUser)
        .then(function (response) {
          relationshipExists = true;
        });
    } else {
      eventsApiService.updateEventUser(eventUser);
    }
  }
}
