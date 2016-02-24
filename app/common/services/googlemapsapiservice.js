'use strict';

/**
 * @ngdoc service
 * @name app.googleMapsApiService
 * @description
 * # googleMapsApiService
 * Service in the app.
 */
angular.module('app.services')
  .service('googleMapsApiService', googleMapsApiService);

googleMapsApiService.$inject = ['$q'];

function googleMapsApiService($q) {
  return {
    getLocationByAddress: getLocationByAddress
  };

  function getLocationByAddress(callback) {
    var geocoder = new google.maps.Geocoder();
    var def = $q.defer();
    geocoder.geocode({'address': callback}, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var result = results[0];
        var response = {
          lat: result.geometry.location.lat(),
          lng: result.geometry.location.lng()
        };
        def.resolve(response);
      } else {
        def.reject(status);
      }
    });
    return def.promise;
  }
}
