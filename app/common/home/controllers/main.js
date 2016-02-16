'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app.controllers', [])
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = [
    '$state'
  ];

  function MainCtrl ($state) {
    var vm = this;

    //$state.transitionTo("venues.yours");
  }
