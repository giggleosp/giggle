'use strict';

/**
 * @ngdoc service
 * @name app.user
 * @description
 * # user
 * Factory in the app.
 */
angular.module('services', [])
  .factory('userService', function ($http) {

    var baseUrl = "localhost:8080/users";
    var response = {};

    var credentials = {
      username: "user",
      password: "password"
    }

    var headers = credentials ? {authorization : "Basic "
    + btoa(credentials.username + ":" + credentials.password)
    } : {};

    response.allUsers = function () {
      return $http({
        method: "GET",
        url: baseUrl + "/",
        headers: headers
      });
    };

    return response;

  });

