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
    '$rootScope', '$http', 'AUTH_EVENTS', '$location', '$cookies', 'notificationService', '$log'
  ];

function authService($rootScope, $http, AUTH_EVENTS, $location, $cookies, notificationService, $log) {
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
    isAuthorised: isAuthorised,
    setCredentials: setCredentials,
    setCredentialsFromCookieStore: setCredentialsFromCookieStore,
    getUsername: getUsername
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
      })
        .then(function (response) {
        authSuccess(response.data, false);
      },
          function (response) {
        authFailure(response.status);
        console.log(response);
      });
    }

  function logout () {
    currentUser = null;
    clearCredentials();
    $location.path("/sign-in");
    $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
  }

  function createAccount (user) {
    return $http({
        method: "POST",
        dataType: "json",
        url: baseUrl + "/signup",
        data: $.param(user)
      })
      .then(function (response) {
        authSuccess(response.data, true);
      },
        function (response) {
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

  function setCredentialsFromCookieStore() {
    $rootScope.globals = $cookies.getObject('globals') || {};

    $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.globals.currentUser.authData;
  }

  function getUsername() {
    $rootScope.globals = $cookies.getObject('globals') || null;
    
    return $rootScope.globals ? $rootScope.globals.currentUser.username : null;
  }

  function isLoggedIn () {
      return !!currentUser;
    }

  // http://jasonwatmore.com/post/2014/05/26/AngularJS-Basic-HTTP-Authentication-Example.aspx
  function setCredentials(username, password) {
    var authData = btoa(username + ":" + password);

    $rootScope.globals = {
      currentUser: {
        username: username,
        authData: authData
      }
    };

    $http.defaults.headers.common.Authorization = 'Basic ' + authData;
    $cookies.putObject('globals', $rootScope.globals);
  }

  function clearCredentials() {
    $rootScope.globals = {};
    $cookies.remove('globals');
    $http.defaults.headers.common.Authorization = 'Basic ';
  }

  function isAuthorised (authRoles) {
      if (!angular.isArray(authRoles)) {
        authRoles = [authRoles];
      }
      return (isLoggedIn() && authRoles.indexOf(Session.userRole) !== -1);
    }

  function authSuccess(user, isNewUser) {
      setCurrentUser(user);
      $location.path("/");
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, { isNewUser: isNewUser });
    }

  function authFailure(status) {
      var notificationText;

      currentUser = null;

      switch (status) {
        case 401:case 403:case -1:
          notificationText = "Incorrect username/password.";
          break;
        case 500:
          notificationText = "Internal server error.";
          break;
        case 102:case 503:case 400:
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
