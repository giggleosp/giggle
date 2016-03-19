'use strict';

/**
 * @ngdoc function
 * @name app.controller:MyvenuesCtrl
 * @description
 * # MyvenuesCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('MyVenuesCtrl', MyVenuesCtrl);

MyVenuesCtrl.$inject = [
  '$scope', '$timeout', '$state', '$mdDialog', 'venueApiService', 'authService', 'layoutService'
];

function MyVenuesCtrl($scope, $timeout, $state, $mdDialog, venueApiService, authService, layoutService) {
  var vm = this;

  var user = authService.getCurrentUser();

  getVenues();
  vm.cardsPerRow = layoutService.getNumberOfCardsPerRow();
  vm.gotoVenue = gotoVenue;
  vm.addNewVenue = addNewVenue;

  function getVenues() {
    venueApiService.getVenuesManagedByUser(user.id)
      .then(function (response) {
        vm.venues = response.data;
      }, function (response) {

      });
  }

  function gotoVenue(id) {
    $state.go('venues.venue', {id: id});
  }

  function addNewVenue() {
    $mdDialog.show({
      templateUrl: 'src/venues/views/partials/add-venue.tpl.html',
      parent: angular.element(document.body),
      controller: 'AddVenueCtrl',
      controllerAs: 'vm'
    });
  }

  $scope.$on("navigation-menu-state-changed", function () {
    $timeout(function () {
      vm.cardsPerRow = layoutService.getNumberOfCardsPerRow();
    }, 200);
  });
}
