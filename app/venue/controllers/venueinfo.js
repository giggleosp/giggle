'use strict';

/**
 * @ngdoc function
 * @name app.controller:VenueinfoCtrl
 * @description
 * # VenueinfoCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('VenueInfoCtrl', VenueInfoCtrl);

VenueInfoCtrl.$inject = [
  'venue',
  'googleMapsApiService',
  'uiGmapGoogleMapApi'
];

function VenueInfoCtrl(venue, googleMapsApiService, uiGmapGoogleMapApi) {
  var vm = this;

  vm.venue = venue;
  vm.readMore = false;
  console.log(venue);

  setUpMap();

  function setUpMap()
  {
    uiGmapGoogleMapApi.then(function () {
      var address = sprintf("%s, %s, %s, %s, %s", vm.venue.name, vm.venue.addressLine1, vm.venue.city.name, vm.venue.county.name, vm.venue.country.niceName);
      googleMapsApiService.getLocationByAddress(address)
        .then(function (response) {
          vm.foundOnMap = true;
          vm.options = { scrollwheel: false };
          vm.marker = {
            id: 0,
            coords: {
              latitude: response.lat,
              longitude: response.lng
            }
          };
          vm.map = { center: { latitude: response.lat, longitude: response.lng }, zoom: 18 };
        }, function () {
          vm.foundOnMap = false;
        });
    });
  }
}
