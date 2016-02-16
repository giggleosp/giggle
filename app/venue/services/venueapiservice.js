'use strict';

/**
 * @ngdoc service
 * @name app.venueApiService
 * @description
 * # venueApiService
 * Service in the app.
 */
angular.module('app.services')
  .service('venueApiService', venueApiService);

venueApiService.$inject = [
  '$http'
];

function venueApiService($http) {
  var baseUrl = "http://localhost:8080/venues";

  return {
    getVenueWithId: getVenueWithId,
    getVenuesManagedByUser:getVenuesManagedByUser
  };

  function getVenuesManagedByUser(id) {
    return $http({
      method: "GET",
      url: baseUrl + "/managed_by",
      dataType: "json",
      params: { id: id }
    });
  }

  function getVenueWithId(id) {
    return $http({
      method: "GET",
      url: baseUrl + "/" + id,
      dataType: "json"
    });
  }
}
