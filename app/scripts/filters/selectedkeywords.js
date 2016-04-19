'use strict';

/**
 * @ngdoc filter
 * @name app.filter:selectedKeywords
 * @function
 * @description
 * # selectedKeywords
 * Filter in the app.
 */
angular.module('app.filters')
  .filter('selectedKeywords', function () {
    return function (events, keywords) {
      return events.filter(function (event) {
        
      });
    };
  });
