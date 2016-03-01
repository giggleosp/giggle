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
  '$log',
  'eventsApiService',
  'venueApiService',
  'actsApiService',
  '$mdDialog',
  'ownerId',
  'ownerType'
];

function AddEventCtrl($log, eventsApiService, venueApiService, actsApiService, $mdDialog, ownerId, ownerType) {
  var vm = this;

  vm.ownerType = ownerType;
  vm.ownerId = ownerId;

  getActs();

  $log.debug(vm.acts);

  vm.cancel = cancel;

  function cancel() {
    $mdDialog.cancel();
  }

  function getActs() {
    actsApiService.getActs()
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          vm.acts = response.data;
        } else {
          vm.acts = null;
        }
      });
  }

}
