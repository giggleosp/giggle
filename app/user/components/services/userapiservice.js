'use strict';

/**
 * @ngdoc service
 * @name app.user
 * @description
 * # user
 * Factory in the app.
 */
angular.module('app.services', [])
  .service('userApiService', userApiService);

  userApiService.$inject = [
    '$rootScope',
    '$http',
    '$cookies',
    'notificationService'
  ];

  function userApiService ($rootScope, $http, $cookies, notificationService) {
    var baseUrl = "http://localhost:8080/users";

    return {
      usernameExists: usernameExists,
      emailExists: emailExists,
      getUserWithUsername: getUserWithUsername,
      getUserFromCookies: getUserFromCookies,
      updateUser: updateUser
    };

    function usernameExists(username) {
      return $http({
        method: "GET",
        dataType: "json",
        url: baseUrl + "/usernameexists/",
        params: { username: username }
      });
    }

    function emailExists(email) {
      return $http({
        method: "GET",
        dataType: "json",
        url: baseUrl + "/emailexists/",
        params: { email: email }
      });
    }

    function getUserWithUsername(username) {
      return $http({
        method: "POST",
        dataType: "json",
        url: baseUrl + "/username",
        data: $.param({ username: username })
      });
    }

    function getUserFromCookies() {
      var username = $cookies.get("user");
      return $http({
        method: "POST",
        dataType: "json",
        url: baseUrl + "/username",
        data: $.param({ username: username })
      });
    }

    function updateUser(user) {
      return $http({
        method: "PUT",
        dataType: "json",
        url: baseUrl + "/update",
        data: JSON.stringify(user),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        notificationService.showToast("Account updated");
        $rootScope.$broadcast("user-updated", { user: response.data });
        return response;
      }, function () {
        notificationService.showToast("Could not update, try again.");
      });
    }

  }
