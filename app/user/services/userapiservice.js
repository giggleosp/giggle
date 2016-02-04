'use strict';

/**
 * @ngdoc service
 * @name app.user
 * @description
 * # user
 * Factory in the app.
 */
angular.module('app.services', [])
  .service('userApiService', userApiService);

  userApiService.$inject = [
    '$http'
  ];

  function userApiService ($http) {
    var baseUrl = "http://localhost:8080/users";

    return {
      usernameExists: function (username) {
        return $http({
          method: "GET",
          dataType: "json",
          url: baseUrl + "/usernameexists/",
          params: { username: username }
        });
      },
      emailExists: function (email) {
        return $http({
          method: "GET",
          dataType: "json",
          url: baseUrl + "/emailexists/",
          params: { email: email }
        });
      }
    }
  }
