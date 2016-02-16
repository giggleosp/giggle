'use strict';

/**
 * @ngdoc function
 * @name app.controller:VenueCtrl
 * @description
 * # VenueCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('VenueCtrl', VenueCtrl);

VenueCtrl.$inject = [
  '$stateParams',
  'venueApiService'
];
function VenueCtrl($stateParams, venueApiService) {
  var vm = this;

  var venueId = $stateParams.id;

  if (venueId) {
    getVenueWithId(venueId);
  }

  function getVenueWithId(id) {
    venueApiService.getVenueWithId(id)
      .then(function (response) {
        vm.venue = response.data;
        console.log(vm.venue);
      }, function (response) {

      });
  }
}
