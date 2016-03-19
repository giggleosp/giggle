'use strict';

/**
 * @ngdoc function
 * @name app.controller:ActinfoCtrl
 * @description
 * # ActinfoCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('ActInfoCtrl', ActInfoCtrl);

ActInfoCtrl.$inject = [
  'act'
];
function ActInfoCtrl(act) {
  var vm = this;

  vm.act = act;
  vm.readMore = false;
}
