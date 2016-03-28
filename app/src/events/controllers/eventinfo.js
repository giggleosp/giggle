'use strict';

/**
 * @ngdoc function
 * @name app.controller:EventinfoctrlCtrl
 * @description
 * # EventinfoctrlCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('EventInfoCtrl', EventInfoCtrl);

EventInfoCtrl.$inject = [
  'event', 'googleMapsApiService', 'uiGmapGoogleMapApi'
];

function EventInfoCtrl(event, googleMapsApiService, uiGmapGoogleMapApi) {
  var vm = this;

  vm.event = event;
  vm.readMore = false;
  vm.refreshMap = false;

  init();

  function init() {
    setUpMap();
  }

  function setUpMap() {
    vm.refreshMap = true;
    uiGmapGoogleMapApi.then(function () {
      var address = sprintf("%s, %s, %s, %s, %s",
        vm.event.venue.name, vm.event.venue.addressLine1,
        vm.event.venue.city.name, vm.event.venue.county.name,
        vm.event.venue.country.niceName);
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
