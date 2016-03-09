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
  '$scope', '$log', 'authService', 'eventsApiService',
  'actsApiService', '$mdDialog', 'owner',
  'ownerType', 'eventsService', '$state'
];

function AddEventCtrl($scope, $log, authService, eventsApiService,
                      actsApiService, $mdDialog, owner,
                      ownerType, eventsService, $state) {
  var vm = this;

  vm.currentUser = authService.getCurrentUser();
  vm.ownerType = ownerType;
  vm.owner = owner; // id of the venue or act
  vm.currentDate = new Date();

  vm.cancel = cancel;
  vm.save = save;

  init();

  function init() {
    if (vm.ownerType == 'venue') {
      getActs();
    } else {

    }
    getEventTypes();
  }

  function cancel() {
    $mdDialog.cancel();
  }

  function save (event) {
    if ($scope.addEventForm.$valid) {
      vm.showProgress = true;

      if (vm.ownerType == 'venue') {
        event.venue = vm.owner;
        event.venueConfirmed = true;
      } else {
        event.act = vm.owner;
        event.actConfirmed = true;
      }
      if (event.startTime != null || event.startTime != undefined) {
        event.startTime = eventsService.formatTime(event.startTime);
      }
      if (event.endTime != null || event.endTime != undefined) {
        event.endTime = eventsService.formatTime(event.endTime);
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
    actsApiService.getActs()
      .then(function (response) {
        if (response.status == 200) {
          vm.acts = response.data;
        } else {
          vm.acts = null;
        }
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
