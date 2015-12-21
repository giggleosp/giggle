'use strict';

/**
 * @ngdoc service
 * @name app.countryApiService
 * @description
 * # countryApiService
 * Service in the app.
 */
angular.module('app')
  .service('countryService', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var baseUrl = "http://localhost:8080/countries";
    var response = {};


    response.getCountries = function () {
      return $http({
        method: "GET",
        dataType: "json",
        url: baseUrl + "/"
      });
    };

    response.getCountiesForCountry = function (id) {
      return $http({
        method: "GET",
        dataType: "json",
        url: baseUrl + "/" + id + "/counties"
      });
    };

    return response;

  }]);
