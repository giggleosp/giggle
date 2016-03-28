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
    isThisYear: isThisYear,
    isToday: isToday,
    compareDates: compareDates,
    compareMonths: compareMonths
  };

  // comparing the current year with the year of a date passed in
  function isThisYear(d) {
    var today = new Date();
    var date = new Date(d);

    return today.getFullYear() == date.getFullYear();
  }

  function isToday(d) {
    var today = new Date();
    var date = new Date(d);

    return today.getDay() == date.getDay()
      && today.getMonth() == date.getMonth()
      && today.getYear() == date.getYear();
  }

  function compareDates(d1, d2) {
    var dateOne = new Date(d1);
    var dateTwo = new Date(d2);

    return dateOne.getDay() == dateTwo.getDay()
      && dateOne.getMonth() == dateTwo.getMonth()
      && dateOne.getYear() == dateTwo.getYear();
  }

  function compareMonths(d1, d2) {
    var dateOne = new Date(d1);
    var dateTwo = new Date(d2);

    return dateOne.getMonth()
      == dateTwo.getMonth();
  }

}
