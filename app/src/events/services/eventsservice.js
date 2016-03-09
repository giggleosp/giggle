'use strict';

/**
 * @ngdoc service
 * @name app.eventsFactory
 * @description
 * # eventsFactory
 * Factory in the app.
 */
angular.module('app.services')
  .factory('eventsService', eventsService);

eventsService.$inject = [
 '$filter'
];

function eventsService($filter) {

  return {
    formatTime: formatTime
  };

  function formatTime(time) {
    var t = new Date(time);
    return $filter('date')(new Date(t), 'HH:mm:ss');
  }

}
