'use strict';

/**
 * @ngdoc service
 * @name app.layoutService
 * @description
 * # layoutService
 * Service in the app.
 */
angular.module('app.services')
  .service('layoutService', layoutService);

layoutService.$inject = [
  'navigationMenuService'
];

function layoutService(navigationMenuService) {
  return {
    getNumberOfCardsPerRow: function getNumberOfCardsPerRow() {
      return 5;
    }
  };

}
