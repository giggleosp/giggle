'use strict';

/**
 * @ngdoc service
 * @name app.AuthService
 * @description
 * # AuthService
 * Factory in the app.
 */
angular.module('app.services')
  .service('authService', ['$location', '$rootScope', 'AUTH_EVENTS', '$cookies', '$log', '$http', function ($location, $rootScope, AUTH_EVENTS, $cookies, $log, $http) {

    var baseUrl = "http://localhost:8080/users";
    var response = {};

    response.addUser = function (user) {
      return $http({
        method: "POST",
        dataType: "json",
        url: baseUrl + "/insert",
        data: $.param(user)
      }).then(function (response) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, { user: response.data });
        $location.path("/");
      }, function (response) {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed, { status: response.status, data: response.data });
      });
    };

    response.login = function (credentials) {
      return $http({
        method: "POST",
        dataType: "json",
        url: baseUrl + "/login",
        data: $.param({ username: credentials.username }),
        withCredentials: true,
        headers: {
          'Authorization': "Basic " + btoa(credentials.username + ":" + credentials.password)
        }
      }).then(function (response) {
         $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, { user: response.data });
         $location.path("/");
      }, function (response) {
         $rootScope.$broadcast(AUTH_EVENTS.loginFailed, { status: response.status, data: response.data });
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
