'use strict';

/**
 * @ngdoc filter
 * @name app.filter:cityFilter
 * @function
 * @description
 * # cityFilter
 * Filter in the app.
 */
angular.module('app.filters')
  .filter('cityFilter', function () {
    return function (events, cities) {
      var results = [];
      if (cities.length > 0) {
        angular.forEach(cities, function (city, key) {
          for(var i=0; i < events.length; i++) {
            var event = events[i];
            if (event.venue.city.id == city.id) {
              results.push(event);
            }
          }
        });
        return results;
      } else {
        return events;
      }
    };
  });
