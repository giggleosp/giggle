'use strict';

/**
 * @ngdoc function
 * @name app.controller:RecommendedvenuesCtrl
 * @description
 * # RecommendedvenuesCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('RecommendedVenuesCtrl', RecommendedVenuesCtrl);

MyVenuesCtrl.$inject = [
  '$scope', '$timeout', '$state', '$mdDialog', 'venueApiService', 'authService', 'layoutService'
];

function RecommendedVenuesCtrl($scope, $timeout, $state, $mdDialog, venueApiService, authService, layoutService) {
  var vm = this;

  var user = authService.getCurrentUser();

  getVenues();
  vm.cardsPerRow = layoutService.getNumberOfCardsPerRow();
  vm.gotoVenue = gotoVenue;

  function getVenues() {
    venueApiService.getVenues()
      .then(function (response) {
        vm.venues = response.data;
        console.log(response);
      }, function (response) {

      });
  }

  function gotoVenue(id) {
    $state.go('venues.venue', {id: id});
  }


  $scope.$on("navigation-menu-state-changed", function () {
    $timeout(function () {
      vm.cardsPerRow = layoutService.getNumberOfCardsPerRow();
    }, 200);
  });
}
