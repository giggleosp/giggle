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
  var baseUrl = "http://localhost:8080/venues/";

  return {
    getVenueWithId: getVenueWithId,
    getVenuesManagedByUser:getVenuesManagedByUser,
    getVenueTypes: getVenueTypes,
    createVenue: createVenue,
    getUserVenueRelationship: getUserVenueRelationship
  };

  function getVenuesManagedByUser(id) {
    return $http({
      method: "GET",
      url: baseUrl + "managed_by",
      dataType: "json",
      params: { id: id }
    });
  }

  function getVenueWithId(id) {
    return $http({
      method: "GET",
      url: baseUrl + id,
      dataType: "json"
    });
  }

  function getVenueTypes() {
    return $http({
      method: "GET",
      url: baseUrl + "types",
      dataTypes: "json"
    });
  }

  function createVenue(venue, user) {
    var data = { venue: venue, user: user };
    return $http({
      method: "POST",
      url: baseUrl + "new",
      data: angular.toJson(data),
      dataType: "json",
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  function getUserVenueRelationship(venueId, userId) {
    return $http({
      method: "GET",
      url: baseUrl + "venue/" + venueId + "/user/" + userId
    });
  }
}
