'use strict';

/**
 * @ngdoc function
 * @name app.controller:AddvenueCtrl
 * @description
 * # AddvenueCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('AddVenueCtrl', AddVenueCtrl);

AddVenueCtrl.$inject = [
  '$scope',
  '$state',
  'authService',
  'venueApiService',
  'countryApiService',
  '$mdDialog'
];

function AddVenueCtrl($scope, $state, authService, venueApiService, countryApiService, $mdDialog) {
  var vm = this;

  //vm.showProgress = true;
  // stitch $scope methods to controller
  vm.getCountiesForCountry = getCountiesForCountry;
  vm.getCitiesForCounty = getCitiesForCounty;
  vm.cancel = cancel;
  vm.save = save;

  getCountries();
  getVenueTypes();

  function getVenueTypes() {
    venueApiService.getVenueTypes()
      .then(function (response) {
        vm.venueTypes = response.data;
      })
  }

  function getCountries() {
    countryApiService.getCountries()
      .then(function (response) {
        vm.countries = response.data;
      });
  }

  function getCountiesForCountry (countryId) {
    countryApiService.getCountiesForCountry(countryId)
      .then(function (response) {
        vm.counties = response.data;
        vm.anyCounties = true;
      }, function (response) {
        if (response.status === 404) {
          vm.anyCounties = false;
          vm.anyCities = false;
          vm.venue.county = undefined;
          vm.venue.city = undefined;
        }
      });
  }

  function getCitiesForCounty (countyId) {
    countryApiService.getCitiesForCounty(countyId)
      .then(function (response) {
        vm.cities = response.data;
        vm.anyCities = true;
      }, function (response) {
        if (response.status === 404) {
          vm.anyCities = false;
          vm.venue.city = undefined;
        }
      });
  }

  function save(venue) {
   if ($scope.addVenueForm.$valid) {
     vm.showProgress = true;
     var user = authService.getCurrentUser();
     venueApiService.createVenue(venue, user)
       .then(function () {
         vm.showProgress = false;
         $mdDialog.hide();
       }, function () {
         
       });
   }
  }

  function cancel() {
    $mdDialog.cancel();
  }

}
