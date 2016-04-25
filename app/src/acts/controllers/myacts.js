'use strict';

/**
 * @ngdoc function
 * @name app.controller:MyactsCtrl
 * @description
 * # MyactsCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('MyActsCtrl', MyActsCtrl);

MyActsCtrl.$inject = [
  '$scope', '$timeout', '$state', '$mdDialog', 'actApiService', 'authService', 'layoutService', 'actFactory'
];

function MyActsCtrl($scope, $timeout, $state, $mdDialog, actApiService, authService, layoutService, actFactory) {
  var vm = this;
  
  vm.currentUser = authService.getCurrentUser();
  vm.cardsPerRow = layoutService.getNumberOfCardsPerRow();
  vm.gotoAct = gotoAct;
  vm.createActSubTitle = createActSubtitle;

  init();

  function createActSubtitle(act) {
    return actFactory.createCardSubtitle(act);
  }

  function init() {
    getActs();
  }

  function getActs() {
    actApiService.getActs(vm.currentUser.id)
      .then(function (response) {
        vm.acts = response.data;
      });
  }

  function gotoAct(id) {
    $state.go('acts.act', { id: id });
  }

  $scope.$on("navigation-menu-state-changed", function () {
    $timeout(function () {
      vm.cardsPerRow = layoutService.getNumberOfCardsPerRow();
    }, 200);
  });
}
