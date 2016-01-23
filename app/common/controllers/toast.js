'use strict';

/**
 * @ngdoc function
 * @name app.controller:ToastCtrl
 * @description
 * # ToastCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('ToastCtrl', ['$scope', '$mdToast', function ($scope, $mdToast) {
    $scope.closeToast = function() {
      $mdToast.hide();
    };
  }]);
