'use strict';

/**
 * @ngdoc service
 * @name app.user
 * @description
 * # user
 * Factory in the app.
 */
angular.module('app.services', [])
  .factory('userApiService', ['$http', function ($http) {

    var baseUrl = "http://localhost:8080/user";
    var response = {};

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

    response.addUser = function (user) {
      return $http({
        method: "POST",
        dataType: "json",
        url: baseUrl + "/insert",
        data: $.param(user),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    };

    return response;

  }]);

