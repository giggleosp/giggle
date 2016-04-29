'use strict';

/**
 * @ngdoc function
 * @name app.controller:RecommendedactsCtrl
 * @description
 * # RecommendedactsCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('RecommendedActsCtrl', RecommendedActsCtrl);

RecommendedActsCtrl.$inject = [
  '$scope', '$timeout', '$state', '$mdDialog', 'actApiService', 'authService', 'layoutService', 'actFactory'
];

function RecommendedActsCtrl($scope, $timeout, $state, $mdDialog, actApiService, authService, layoutService, actFactory) {
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
    actApiService.getActs()
      .then(function (response) {
        vm.acts = response.data;
      });
  }

  function gotoAct(id) {
    $state.go('acts.act', { id: id });
  }

  function addNewAct() {
    $mdDialog.show({
      templateUrl: 'src/acts/views/partials/add-act.tpl.html',
      parent: angular.element(document.body),
      controller: 'AddActCtrl',
      controllerAs: 'vm'
    });
  }

  $scope.$on("navigation-menu-state-changed", function () {
    $timeout(function () {
      vm.cardsPerRow = layoutService.getNumberOfCardsPerRow();
    }, 200);
  });
}
