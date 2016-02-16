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
  '$scope',
  '$timeout',
  '$state',
  'venueApiService',
  'authService',
  'navigationMenuService'
];

function MyVenuesCtrl($scope, $timeout, $state, venueApiService, authService, navigationMenuService) {
  var vm = this;

  var user = authService.getCurrentUser();
  var isMenuOpen = navigationMenuService.getOpenedState();

  getVenues();
  vm.cardsPerRow = getNumberOfCardsPerRow();
  vm.gotoVenue = gotoVenue;

  function getVenues() {
    venueApiService.getVenuesManagedByUser(user.id)
      .then(function (response) {
        vm.venues = response.data;
      }, function (response) {

      });
  }

  function getNumberOfCardsPerRow() {
    var mainWidth;
    if (isMenuOpen && window.innerWidth > 960) {
      mainWidth = window.innerWidth - 195;
    } else {
      mainWidth = window.innerWidth;
    }
    return mainWidth / 220;
  }

  function gotoVenue(id) {
    $state.transitionTo('venues.venue', {id: id})
  }

  $scope.$on("navigation-menu-state-changed", function () {
    isMenuOpen = navigationMenuService.getOpenedState();
    $timeout(function () {
      vm.cardsPerRow = getNumberOfCardsPerRow();
    }, 410);
  });
}
