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
  'venueApiService',
  'authService',
  'navigationMenuService'
];

function MyVenuesCtrl($scope, $timeout, venueApiService, authService, navigationMenuService) {
  var vm = this;

  var user = authService.getCurrentUser();
  var isMenuOpen = navigationMenuService.getOpenedState();

  getVenues();
  vm.cardsPerRow = getNumberOfCardsPerRow();

  function getVenues() {
    var userId = user.id;
    venueApiService.getVenuesManagedByUser(userId)
      .then(function (response) {
        vm.venues = response.data;
      }, function (response) {

      });
  }

  function getNumberOfCardsPerRow() {
    if (isMenuOpen) {
      return 5;
    } else {
      return 6;
    }
  }

  $scope.$on("navigation-menu-state-changed", function () {
    isMenuOpen = navigationMenuService.getOpenedState();
    $timeout(function () {
      vm.cardsPerRow = getNumberOfCardsPerRow();
    }, 410);
  });
}
