'use strict';

/**
 * @ngdoc function
 * @name app.controller:AddactCtrl
 * @description
 * # AddactCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('AddActCtrl', AddActCtrl);

AddActCtrl.$inject = [
  '$scope', '$state', 'authService', 'actApiService', 'countryApiService', '$mdDialog', '$log'
];

function AddActCtrl($scope, $state, authService, actApiService, countryApiService, $mdDialog, $log) {
  var vm = this;

  vm.currentUser = authService.getCurrentUser();

  //vm.showProgress = true;
  // stitch $scope methods to controller
  vm.getCountiesForCountry = getCountiesForCountry;
  vm.getCitiesForCounty = getCitiesForCounty;
  vm.cancel = cancel;
  vm.save = save;

  init();

  function init() {
    getCountries();

    if (vm.currentUser.country) {
      getCountiesForCountry(vm.currentUser.country.id);
    }

    getActCategories();
    getGenres();
  }

  function getActCategories() {
    actApiService.getActCategories()
      .then(function (response) {
        vm.actCategories = response.data;
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
          vm.act.county = undefined;
          vm.act.city = undefined;
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
          vm.act.city = undefined;
        }
      });
  }

  function getGenres() {
    actApiService.getGenres()
      .then(function (response) {
        if (response.status == 200) {
          $log.debug(response);
          vm.genres = response.data;
        }
      });
  }

  function save(act) {
    if ($scope.addActForm.$valid) {
      var user = authService.getCurrentUser();
      vm.showProgress = true;
      actApiService.createAct(act, user)
        .then(function (response) {
          vm.showProgress = false;
          $mdDialog.hide();
          // go to newly created acts
          $state.go('acts.act', {id: response.data.id });
        }, function (response) {
          vm.showProgress = false;
        });
    }
  }

  function cancel() {
    $mdDialog.cancel();
  }

}
