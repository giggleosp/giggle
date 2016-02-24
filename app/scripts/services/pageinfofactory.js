'use strict';

/**
 * @ngdoc service
 * @name app.pageInfoFactory
 * @description
 * # pageInfoFactory
 * Factory in the app.
 */
angular.module('app')
  .factory('pageInfoFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
