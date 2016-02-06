'use strict';

/**
 * @ngdoc service
 * @name app.AuthService
 * @description
 * # AuthService
 * Factory in the app.
 */
angular.module('app.services')
  .service('authService', authService);

  authService.$inject = [
    '$rootScope',
    '$http',
    'AUTH_EVENTS',
    '$location',
    '$cookies',
    'notificationService',
    '$log'
  ];

  function authService($rootScope, $http, AUTH_EVENTS, $location, $cookies, notificationService, $log) {
    var baseUrl = "http://localhost:8080/users";

    return {
      createAccount: function (user) {
        return $http({
          method: "POST",
          dataType: "json",
          url: baseUrl + "/insert",
          data: $.param(user)
        })
          .then(function (data) {
            authSuccess(data);
            $location.path("/");
          }, function (data) {
            authFailure(data);
          });
      },
      login: function (credentials) {
        return $http({
          method: "POST",
          dataType: "json",
          url: baseUrl + "/login",
          data: $.param({ username: credentials.username }),
          withCredentials: true,
          headers: {
            'Authorization': "Basic " + btoa(credentials.username + ":" + credentials.password)
          }
        }).then(function (data) {
            authSuccess(data);
            $location.path("/");
          }, function (data) {
            authFailure(data);
          });
      },
      logout: function () {
        // clear session cookies
        $cookies.remove("user");
        logoutSuccess();
      },
      isLoggedIn: function () {
        var user = $cookies.get("user");
        console.log(!!user);
        return !!user;
      },
      isAuthorised: function (authRoles) {
        if (!angular.isArray(authRoles)) {
          authRoles = [authRoles];
        }
        return (response.isLoggedIn() && authRoles.indexOf(Session.userRole) !== -1);
      }
    };

    function logoutSuccess () {
      $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
    }

    function authSuccess (data) {
      $cookies.put("user", data);
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, { user: data });
    }

    function authFailure (data) {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);

      var notificationText = null;

      switch (data.status)
      {
        case 403:
          notificationText = "Incorrect username/password.";
          break;
        case 500:
          notificationText = "Internal server error.";
          break;
        case 102 || 400 || 503:
          notificationText = "There was a problem connecting to the server.";
          break;
        case 409:
          notificationText = "User already exists, please log in.";
          break;
        default:
          notificationText = "Something went wrong!";
          break;
      }

      notificationService.showToast(notificationText);
    }
  }
