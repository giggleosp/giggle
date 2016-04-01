'use strict';

/**
 * @ngdoc service
 * @name app.currencyApiService
 * @description
 * # currencyApiService
 * Service in the app.
 */
angular.module('app.services')
  .service('currencyApiService', currencyApiService);

currencyApiService.$inject = [
  '$http', 'dateService'
];

function currencyApiService($http, dateService) {
  var baseUrl = "http://api.fixer.io/";

  return {
    getExchangeRate: getExchangeRate
  };

  function getExchangeRate(date, base, symbol) {
    var url = baseUrl +
      (date ? dateService.formatDate(date, 'yyyy-MM-dd') : 'latest')
      + '?base='+base+'&symbols='+ symbol +'&callback=JSON_CALLBACK';

    return $http.jsonp(url);
  }
}
