'use strict';

/**
 * @ngdoc function
 * @name giggleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the giggleApp
 */
angular.module('giggleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.greeting = {id: 'xxx', content: 'Hello World!'}
  });
