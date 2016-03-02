'use strict';

/**
 * @ngdoc function
 * @name app.controller:VenueCtrl
 * @description
 * # VenueCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('VenueCtrl', VenueCtrl);

VenueCtrl.$inject = [
  '$stateParams',
  '$mdDialog',
  '$mdMedia',
  'venueApiService',
  'authService'
];
function VenueCtrl($stateParams, $mdDialog, $mdMedia, venueApiService, authService) {
  var vm = this;

  var venueId = $stateParams.id;

  vm.user = authService.getCurrentUser();
  vm.fabIsOpen = false;

  vm.showVenueInfo = showVenueInfo;
  vm.showAddEventDialog = showAddEventDialog;

  if (venueId) {
    getVenueWithId(venueId);
    // get users relationship with venues if any
  }

  if (vm.user) {
    getUserVenueRelationship(venueId, vm.user.id);
  }

  function getVenueWithId(id) {
    venueApiService.getVenueWithId(id)
      .then(function (response) {
        vm.venue = response.data;
        vm.ratingArray = ratingArray;
        vm.ratingHasHalfStar = ratingHasHalfStar;
      }, function (response) {

      });
  }

  // dictates how many full stars will be displayed in the venues rating
  function ratingArray() {
    return new Array(Math.floor(vm.venue.rating));
  }

  function ratingHasHalfStar() {
    var remainder = vm.venue.rating % 1;

    return remainder >= 0.1
      && remainder <= 0.5
      && vm.venue.rating < 5;
  }

  function getUserVenueRelationship(venueId, userId) {
    venueApiService.getUserVenueRelationship(venueId, userId)
      .then(function(response) {
        vm.userVenue = response.data;
      });
  }

  function showVenueInfo(event) {
    var useFullScreen = $mdMedia('sm') || $mdMedia('xs');
    $mdDialog.show({
      controller: 'VenueInfoCtrl',
      controllerAs: 'vm',
      templateUrl: 'src/venues/views/venues.venue.info.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true,
      fullscreen: useFullScreen,
      locals: {
        venue: vm.venue
      }
    });
  }

  function showAddEventDialog(event) {
    $mdDialog.show({
      controller: 'AddEventCtrl',
      controllerAs: 'vm',
      templateUrl: 'src/events/views/partials/add-event.tpl.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: false,
      locals: {
        ownerType: "venue",
        ownerId: venueId
      }
    });
  }
}