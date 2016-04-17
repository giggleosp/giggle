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
  '$stateParams', '$mdDialog', '$mdMedia', 'venueApiService', 'authService'
];
function VenueCtrl($stateParams, $mdDialog, $mdMedia, venueApiService, authService) {
  var vm = this;

  var venueId = $stateParams.id;

  vm.showEditVenueDialog = showEditVenueDialog;
  vm.showVenueInfo = showVenueInfo;
  vm.showAddEventDialog = showAddEventDialog;

  init();

  function init() {
    if (authService.isLoggedIn()) {
      vm.user = authService.getCurrentUser();
    }
    if (venueId) {
      getVenueWithId(venueId);
    }
    if (vm.user) {
      getUserVenueRelationship(venueId, vm.user.id);
    }
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

  function showEditVenueDialog(event) {
    var useFullScreen = $mdMedia('sm') || $mdMedia('xs');
    $mdDialog.show({
      controller: 'EditVenueCtrl',
      controllerAs: 'vm',
      templateUrl: 'src/venues/views/partials/venues.venue.edit.tpl.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: false,
      fullscreen: useFullScreen,
      locals: {
        venue: vm.venue
      }
    });
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
      templateUrl: 'src/venues/views/partials/venues.venue.info.tpl.html',
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
        ownerType: "venue",
        owner: vm.venue
      }
    });
  }
}
