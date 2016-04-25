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
    var baseUrl = "http://localhost:8080/";

    return {
      getCountries: function () {
        return $http({
          method: "GET",
          dataType: "json",
          url: baseUrl + "countries"
        });
      },
      getCountiesForCountry: function (id) {
        return $http({
          method: "GET",
          dataType: "json",
          url: baseUrl + "countries/" + id + "/counties"
        });
      },
      getCitiesForCounty: function (id) {
        return $http({
          method: "GET",
          dataType: "json",
          url: baseUrl + "countries/counties/" + id + "/cities"
        });
      },
      getCities: function getCountries() {
        return $http({
          method: "GET",
          dataType: "json",
          url: baseUrl + "cities"
        });
      }
    }
  }
