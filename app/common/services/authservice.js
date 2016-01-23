'use strict';

/**
 * @ngdoc service
 * @name app.AuthService
 * @description
 * # AuthService
 * Factory in the app.
 */
angular.module('app.services')
  .service('authService', ['AUTH_EVENTS', '$cookies', '$log', '$http', function (AUTH_EVENTS, $cookies, $log, $http) {

    var response = {}; // holds response
    var baseUrl = "http://localhost:8080/user";

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

    // login user
    response.login = function (credentials) {
      return $http({
        method: "POST",
        url: baseUrl + "/login",
        data: $.param(credentials),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    };

    response.isLoggedIn = function () {
      var user = $cookies.get("user");
      return !!user;
    };

    response.isAuthorised = function (authRoles) {
      if (!angular.isArray(authRoles)) {
        authRoles = [authRoles];
      }
      return (response.isLoggedIn() && authRoles.indexOf(Session.userRole) !== -1);
    };

    return response;

  }]);
