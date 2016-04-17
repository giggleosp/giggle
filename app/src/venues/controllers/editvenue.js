'use strict';

/**
 * @ngdoc function
 * @name app.controller:EditvenueCtrl
 * @description
 * # EditvenueCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('EditVenueCtrl', EditVenueCtrl);

EditVenueCtrl.$inject = [
  '$scope', 'venue', 'venueApiService', '$mdDialog'
];

function EditVenueCtrl($scope, venue, venueApiService, $mdDialog) {
  var vm = this;

  vm.venue = venue;
  vm.showProgress = false;

  vm.cancel = cancel;
  vm.save = save;

  init();

  function init() {
    venueApiService.getVenueTypes()
      .then(function (response) {
        vm.venueTypes = response.data;
      });
  }

  function save(venue) {
    if ($scope.form.$valid) {
      vm.showProgress = true;
      venueApiService.updateVenue(venue)
        .then(function () {
          vm.showProgress = false;
          $mdDialog.hide();
        }, function (response) {

        });
    }
  }

  function cancel() {
    $mdDialog.cancel();
  }
}
