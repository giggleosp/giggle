'use strict';

/**
 * @ngdoc service
 * @name app.eventsFactory
 * @description
 * # eventsFactory
 * Factory in the app.
 */
angular.module('app.services')
  .factory('dateService', dateService);

dateService.$inject = [
 '$filter', '$log'
];

function dateService($filter, $log) {

  return {
    isThisYear: isThisYear
  };

  // comparing the current year with the year of a date passed in
  function isThisYear(d) {
    var today = new Date();
    var date = new Date(d);

    return today.getFullYear() == date.getFullYear();
  }

}
