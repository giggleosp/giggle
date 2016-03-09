'use strict';

/**
 * @ngdoc function
 * @name app.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('EventCtrl', EventCtrl);

EventCtrl.$inject = [
  '$stateParams', 'authService'
];

function EventCtrl($stateParams, authService) {
  var vm = this;

  var eventId = $stateParams.id;

  alert(eventId);
}
