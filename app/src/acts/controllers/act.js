'use strict';

/**
 * @ngdoc function
 * @name app.controller:ActCtrl
 * @description
 * # ActCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('ActCtrl', ActCtrl);

ActCtrl.$inject = [
  '$stateParams', '$mdDialog', '$mdMedia', 'actApiService', 'authService'
];

function ActCtrl($stateParams, $mdDialog, $mdMedia, actApiService, authService) {
  var vm = this;

  var actId = $stateParams.id;

  vm.showActInfo = showActInfo;
  vm.showAddEventDialog = showAddEventDialog;

  init();

  function init() {
    if (authService.isLoggedIn()) {
      vm.user = authService.getCurrentUser();
    }
    if (actId) {
      getActWithId(actId);
    }
    if (vm.user) {
      getUserActRelationship(actId, vm.user.id);
    }
  }


  function getActWithId(id) {
    actApiService.getActWithId(id)
      .then(function (response) {
        vm.act = response.data;
        vm.ratingArray = ratingArray;
        vm.ratingHasHalfStar = ratingHasHalfStar;
      }, function (response) {

      });
  }

  // dictates how many full stars will be displayed in the acts rating
  function ratingArray() {
    return new Array(Math.floor(vm.act.rating));
  }

  function ratingHasHalfStar() {
    var remainder = vm.act.rating % 1;

    return remainder >= 0.1
      && remainder <= 0.5
      && vm.act.rating < 5;
  }

  function getUserActRelationship(actId, userId) {
    actApiService.getUserActRelationship(actId, userId)
      .then(function(response) {
        vm.actUser = response.data;
      });
  }

  function showActInfo(event) {
    var useFullScreen = $mdMedia('sm') || $mdMedia('xs');
    $mdDialog.show({
      controller: 'ActInfoCtrl',
      controllerAs: 'vm',
      templateUrl: 'src/acts/views/partials/acts.act.info.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true,
      fullscreen: useFullScreen,
      locals: {
        act: vm.act
      }
    });
  }

  function showAddEventDialog(event) {
    var useFullScreen = $mdMedia('sm') || $mdMedia('xs');
    $mdDialog.show({
      controller: 'AddEventCtrl',
      controllerAs: 'vm',
      templateUrl: 'src/events/views/partials/add-event.tpl.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: false,
      fullscreen: useFullScreen,
      locals: {
        ownerType: "act",
        owner: vm.act
      }
    });
  }
}
