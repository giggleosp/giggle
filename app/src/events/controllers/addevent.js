'use strict';

/**
 * @ngdoc function
 * @name app.controller:AddEventCtrl
 * @description
 * # AddEventCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('AddEventCtrl', AddEventCtrl);

AddEventCtrl.$inject = [
  '$scope', '$log', 'authService', 'eventsApiService', 'actApiService', 'venueApiService', '$mdDialog', 'owner', 'ownerType', 'dateService', '$state'
];

function AddEventCtrl($scope, $log, authService, eventsApiService, actApiService, venueApiService, $mdDialog, owner, ownerType, dateService, $state) {
  var vm = this;

  vm.currentUser = authService.getCurrentUser();
  vm.ownerType = ownerType;
  vm.owner = owner; // id of the venue or act
  vm.currentDate = new Date();
  vm.state = $state;

  vm.cancel = cancel;
  vm.save = save;

  init();

  function init() {
    if (vm.ownerType == 'venue') {
      getActs();
    } else {
      getVenues();
    }
    getEventTypes();
  }

  function cancel() {
    $mdDialog.cancel();
  }

  function save (event) {
    $log.debug(event);
    if ($scope.addEventForm.$valid) {
      vm.showProgress = true;

      if (vm.ownerType == 'venue') {
        event.venue = vm.owner;
        event.venueConfirmed = true;
      } else {
        event.act = vm.owner;
        event.actConfirmed = true;
      }

      eventsApiService.addEvent(event, vm.currentUser, vm.photo)
        .then(function (response) {
          vm.showProgress = false;
          vm.isError = false;

          $mdDialog.hide();
          $state.go("events.event", {id: response.data });

        }, function (response) {
          switch (response.status) {
            case 409:
              vm.errorMessage = response.data.message;
                  break;
            case 500:
              vm.errorMessage = "Internal Server Error";
                  break;
          }
          vm.showProgress = false;
          vm.isError = true;
        });
    }
  }

  function getActs() {
    actApiService.getActs()
      .then(function (response) {
        vm.acts = response.data;
      });
  }

  function getVenues() {
    venueApiService.getVenues()
      .then(function (response) {
        vm.venues = response.data;
        $log.debug(vm.venues);
      });
  }

  function getEventTypes() {
    eventsApiService.getEventTypes()
      .then(function (response) {
        if (response.status == 200) {
          vm.eventTypes = response.data;
        }
      });
  }

}
