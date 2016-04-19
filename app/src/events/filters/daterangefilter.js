'use strict';

/**
 * @ngdoc filter
 * @name app.filter:dateRangeFilter
 * @function
 * @description
 * # dateRangeFilter
 * Filter in the app.
 */
angular.module('app.filters')
  .filter('dateRangeFilter', dateRangeFilter);

dateRangeFilter.$inject = [
  'dateService'
];

function dateRangeFilter(dateService) {

  return function (events, dateFrom, dateTo) {
    var results = [];
    if (dateFrom && dateTo) {
      var format = "MM-dd-yyyy";
      var df = dateService.formatDate(dateFrom, format);
      var dt = dateService.formatDate(dateTo, format);

      angular.forEach(events, function (event, key) {
        var eventDate = dateService.formatDate(event.startDate, format);
        if (eventDate >= df && eventDate <= dt) {
          results.push(event);
        }
      });

    } else if (dateFrom) {
      var date = dateService.formatDate(dateFrom, format);

      angular.forEach(events, function (event, key) {
        var eventDate = dateService.formatDate(event.startDate, format);
        if (eventDate >= date) {
          results.push(event);
        }
      });
    }
    else {
      results = events;
    }
    return results;
  }
}
