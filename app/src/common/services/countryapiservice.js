'use strict';

/**
 * @ngdoc service
 * @name app.countryApiService
 * @description
 * # countryApiService
 * Service in the app.
 */
angular.module('app.services')
  .service('countryApiService', countryApiService);

  countryApiService.$inject = [
    '$http'
  ];

  function countryApiService ($http) {
    var baseUrl = "http://localhost:8080/countries";

    return {
      getCountries: function () {
        return $http({
          method: "GET",
          dataType: "json",
          url: baseUrl + "/"
        });
      },
      getCountiesForCountry: function (id) {
        return $http({
          method: "GET",
          dataType: "json",
          url: baseUrl + "/" + id + "/counties"
        });
      },
      getCitiesForCounty: function (id) {
        return $http({
          method: "GET",
          dataType: "json",
          url: baseUrl + "/counties/" + id + "/cities"
        });
      }
    }
  }
