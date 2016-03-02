'use strict';

/**
 * @ngdoc service
 * @name app.eventsApiService
 * @description
 * # eventsApiService
 * Service in the app.
 */
angular.module('app.services')
  .service('eventsApiService', eventsApiService);

eventsApiService.$inject = [
  '$http'
];

function eventsApiService($http) {
  var baseUrl = "http://localhost:8080/events/";
  return {
    getRecommendedEvents: getRecommendedEvents
  };

  function getRecommendedEvents(user) {
    return $http({
      method: "POST",
      url: baseUrl + "recommended",
      data: angular.toJson(user),
      dataType: "json",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
