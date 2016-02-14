'use strict';

/**
 * @ngdoc filter
 * @name app.filter:chunk
 * @function
 * @description
 * # chunk
 * Filter in the app.
 */

// TODO: http://angularjs4u.com/filters/angularjs-template-divs-row/
angular.module('app.filters', [])
  .filter('array', function () {
    return function (arrayLength) {
      if (arrayLength) {
        arrayLength = Math.ceil(arrayLength);
        var array = new Array(arrayLength), i = 0;
        for (; i < arrayLength; i++) {
          array[i] = i;
        }
        return array;
      }
    }
  });
