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
  '$scope', '$timeout', '$state', '$mdDialog', 'actApiService', 'authService', 'layoutService'
];

function MyActsCtrl($scope, $timeout, $state, $mdDialog, actApiService, authService, layoutService) {
  var vm = this;

  vm.currentUser = authService.getCurrentUser();

  init();

  vm.cardsPerRow = layoutService.getNumberOfCardsPerRow();
  vm.gotoAct = gotoAct;
  vm.addNewAct = addNewAct;

  function init() {
    getActs();
  }

  function getActs() {
    actApiService.getActsManagedByUser(vm.currentUser.id)
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
