'use strict';

/**
 * @ngdoc service
 * @name app.actsApiService
 * @description
 * # actsApiService
 * Service in the app.
 */
angular.module('app.services')
  .service('actApiService', actApiService);

actApiService.$inject = [
  '$http'
];

function actApiService($http) {
  var baseUrl = "http://localhost:8080/acts/";

  return {
    getActs: getActs,
    getActWithId: getActWithId,
    getActsManagedByUser:getActsManagedByUser,
    getActCategories: getActCategories,
    createAct: createAct,
    getUserActRelationship: getUserActRelationship,
    getGenres: getGenres
  };

  function getActs() {
    return $http.get(baseUrl);
  }

  function getActsManagedByUser(id) {
    return $http({
      method: "GET",
      url: baseUrl + "managed_by",
      dataType: "json",
      params: { id: id }
    });
  }

  function getActWithId(id) {
    return $http.get(baseUrl + id);
  }

  function getActCategories() {
    return $http.get(baseUrl + "categories");
  }

  function createAct(act, user) {
    return $http({
      method: "POST",
      url: baseUrl + "create",
      transformRequest: function(data) {
        var formData = new FormData();
        formData
          .append("act", new Blob([angular.toJson(data.act)], {
          type: "application/json"
        }));
        formData.append("user", new Blob([angular.toJson(data.user)], {
          type: "application/json"
        }));
        return formData;
      },
      data: { act: act, user: user },
      headers: {
        "Content-Type": undefined
      }
    });
  }

  function getUserActRelationship(actId, userId) {
    var path = baseUrl + "act/" + actId + "/user/" + userId;
    return $http.get(path);
  }

  function getGenres() {
    return $http.get(baseUrl + "genres");
  }
}
