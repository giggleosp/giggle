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

    var headers = {
      'Content-Type': 'application/json'
    };


    response.usernameExists = function (username) {
      return $http({
        method: "GET",
        dataType: "json",
        url: baseUrl + "/usernameexists",
        params: { username : username },
        headers: headers
      });
    };

    response.emailExists = function (email) {
      return $http({
        method: "GET",
        dataType: "json",
        url: baseUrl + "/emailexists",
        params: { email : email },
        headers: headers
      });
    };

    response.addUser = function (data) {
      return $http({
        method: "POST",
        dataType: "json",
        url: baseUrl + "/insert",
        data: JSON.stringify(data),
        headers: headers
      });
    };


    return response;

  }]);

