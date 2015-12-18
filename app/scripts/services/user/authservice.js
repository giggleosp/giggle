'use strict';

/**
 * @ngdoc service
 * @name app.AuthService
 * @description
 * # AuthService
 * Factory in the app.
 */
angular.module('app')
  .factory('authService', ['$http', 'Session', function ($http, Session) {

    var response = {}; // holds response
    var baseUrl = "http://localhost:8080/user";

    // login user
    response.login = function (credentials) {
      return $http({
        method: "POST",
        url: baseUrl + "/login",
        data: $.param(credentials),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (response) {
        if (response.status === 200) {
         Session.create(response.data.id,
           response.data.role);
        }
        console.log(response);
        return response;
      });
    };

    response.isLoggedIn = function () {
      return !!Session.userId;
    };

    response.isAuthorised = function (authRoles) {
      if (!angular.isArray(authRoles)) {
        authRoles = [authRoles];
      }
      return (response.isLoggedIn() && authRoles.indexOf(Session.userRole) !== -1);
    };

    return response;

  }]);
