'use strict';

/**
 * @ngdoc service
 * @name app.actsApiService
 * @description
 * # actsApiService
 * Service in the app.
 */
angular.module('app.services')
  .service('actsApiService', actsApiService);

actsApiService.$inject = [
  '$http'
];
function actsApiService ($http) {
  var baseUrl = "http://localhost:8080/acts";

  return {
    getActs: getActs
  };

  function getActs() {
    return $http.get(baseUrl);
  }
}
