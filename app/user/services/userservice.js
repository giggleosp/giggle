'use strict';

/**
 * @ngdoc service
 * @name app.user
 * @description
 * # user
 * Factory in the app.
 */
angular.module('app.services', [])
  .service('userService', ['$http', '$cookies', function ($http, $cookies) {

    var baseUrl = "http://localhost:8080/users";
    var response = {};

    response.getUserWithId = function (id) {
      return $http({
        method: "GET",
        dataType: "json",
        url: baseUrl + "/id/" + id,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    };

    response.getUser = function () {
      var cookie = $cookies.get("XSRF-TOKEN");

      return $http({
        method: "POST",
        dataType: "json",
        url: baseUrl + "/test"
      });
    };

    response.usernameExists = function (username) {
      return $http({
        method: "GET",
        dataType: "json",
        url: baseUrl + "/usernameexists",
        params: { username : username },
        headers: {
          'Content-Type': 'application/json'
        }
      });
    };

    response.emailExists = function (email) {
      return $http({
        method: "GET",
        dataType: "json",
        url: baseUrl + "/emailexists",
        params: { email : email },
        headers: {
          'Content-Type': 'application/json'
        }
      });
    };

    return response;

  }]);

