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

eventsApiService.$inject = ['$http'];

function eventsApiService($http) {
  var baseUrl = "http://localhost:8080/events/";

  return {
    getRecommendedEvents: getRecommendedEvents,
    getEventTypes: getEventTypes,
    addEvent: addEvent
  };

  // TODO: Change to a GET request
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

  function getEventTypes() {
    return $http.get(baseUrl + "types");
  }

  function addEvent(event, user, photo) {
    return $http({
      method: "POST",
      url: baseUrl + "add",
      transformRequest: function(data) {
        var formData = new FormData();
        formData.append("event", new Blob([angular.toJson(data.event)], {
          type: "application/json"
        }));
        formData.append("user", new Blob([angular.toJson(data.user)], {
          type: "application/json"
        }));
        formData.append("photo", data.photo);
        return formData;
      },
      data: { event: event, user: user, photo: photo },
      headers: {
        "Content-Type": undefined
      }
    });
  }

}
