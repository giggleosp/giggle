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
    getVenues: getVenues,
    getVenueWithId: getVenueWithId,
    getVenuesManagedByUser:getVenuesManagedByUser,
    getVenueTypes: getVenueTypes,
    createVenue: createVenue,
    getUserVenueRelationship: getUserVenueRelationship
  };

  function getVenues() {
    return $http.get(baseUrl);
  }

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
    return $http({
      method: "POST",
      url: baseUrl + "create",
      transformRequest: function(data) {
        var formData = new FormData();
        formData
          .append("venue", new Blob([angular.toJson(data.venue)], {
            type: "application/json"
          }));
        formData.append("user", new Blob([angular.toJson(data.user)], {
          type: "application/json"
        }));
        return formData;
      },
      data: { venue: venue, user: user },
      headers: {
        "Content-Type": undefined
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
