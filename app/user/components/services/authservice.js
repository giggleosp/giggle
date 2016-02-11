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

  function authService($rootScope, $http, AUTH_EVENTS, $location, $cookies, notificationService) {
    var baseUrl = "http://localhost:8080/users";
    var currentUser;

    return {
      login: login,
      logout: logout,
      createAccount: createAccount,
      getCurrentUser: getCurrentUser,
      setCurrentUser: setCurrentUser,
      getUserWithUsername: getUserWithUsername,
      isLoggedIn: isLoggedIn,
      isAuthorised: isAuthorised
    };

    function login (credentials) {
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
        authSuccess(response.data, false);
      }, function (response) {
        authFailure(response.status);
        console.log(response);
      });
    }

    function logout () {
      currentUser = null;
      $cookies.remove("user");
      $location.path("/sign-in");
      $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
    }

    function createAccount (user) {
      return $http({
        method: "POST",
        dataType: "json",
        url: baseUrl + "/signup",
        data: $.param(user)
      }).then(function (response) {
        authSuccess(response.data, true);
      }, function (response) {
        authFailure(response.status);
      });
    }

    function getUserWithUsername(username) {
      return $http({
        method: "POST",
        dataType: "json",
        url: baseUrl + "/username",
        data: $.param({ username: username })
      }).then(function (response) {
        authSuccess(response.data, false);
      });
    }

    function setCurrentUser (user) {
      currentUser = user;
    }

    function getCurrentUser() {
      return currentUser;
    }

    function isLoggedIn () {
      return !!currentUser;
    }

    function isAuthorised (authRoles) {
      if (!angular.isArray(authRoles)) {
        authRoles = [authRoles];
      }
      return (isLoggedIn() && authRoles.indexOf(Session.userRole) !== -1);
    }

    function authSuccess (user, isNewUser) {
      setCurrentUser(user);
      $cookies.put("user", user.username);
      $location.path("/");
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, { isNewUser: isNewUser });
    }

    function authFailure(status) {
      var notificationText;

      currentUser = null;

      switch (status) {
        case 401, 403, -1:
          notificationText = "Incorrect username/password.";
          break;
        case 500:
          notificationText = "Internal server error.";
          break;
        case 102, 400, 503:
          notificationText = "There was a problem connecting to the server.";
          break;
        case 409:
          notificationText = "This user already exists, please log in.";
          break;
        default:
          notificationText = "Something went wrong! Please try again.";
          break;
      }

      notificationService.showToast(notificationText);
    }

  }
