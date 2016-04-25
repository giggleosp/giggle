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
    getEvents: getEvents,
    getEventWithId: getEventWithId,
    getEventUser: getEventUser,
    getEventTypes: getEventTypes,
    addEvent: addEvent,
    createEventUser: createEventUser,
    updateEventUser: updateEventUser
  };

  function getEvents() {
    return $http.get(baseUrl + "all");
  }

  function getEventWithId(id) {
    return $http.get(baseUrl + "event/" + id);
  }

  function getEventUser(eventId, userId) {
    return $http({
      url: baseUrl + "event_user",
      method: "GET",
      params: {
        event: eventId,
        user: userId
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

  function createEventUser(eventUser) {
    return $http({
      url: baseUrl + "event_user/create",
      method: "POST",
      data: angular.toJson(eventUser),
      dataType: "json",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  function updateEventUser(eventUser) {
    return $http({
      url: baseUrl + "event_user/update",
      method: "PUT",
      data: angular.toJson(eventUser),
      dataType: "json",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

}
