'use strict';

/**
 * @ngdoc function
 * @name app.controller:EditaccountCtrl
 * @description
 * # EditaccountCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('EditAccountCtrl', EditAccountCtrl);

  EditAccountCtrl.$inject = [
    'userApiService',
    'countryApiService',
    'authService',
    '$mdDialog'
  ];

  function EditAccountCtrl (userApiService, countryApiService, authService, $mdDialog) {
    var vm = this;

    vm.showProgress = true;
    // stitch $scope methods to controller
    vm.getCountiesForCountry = getCountiesForCountry;
    vm.getCitiesForCounty = getCitiesForCounty;
    vm.cancel = cancel;
    vm.save = save;
    vm.maxDate = new Date(); // today

    getCountries();
    getUser();

    function getUser() {
      var user = authService.getCurrentUser();
      preFillForm(user);
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
            vm.user.county = undefined;
            vm.user.city = undefined;
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
            vm.user.city = undefined;
          }
        });
    }

    function preFillForm (user) {
      if (user.county != null) {
        getCountiesForCountry(user.country.id);
      }

      if (user.city != null) {
        getCitiesForCounty(user.county.id);
      }

      vm.user = user;
      vm.user.dateOfBirth = !user.dateOfBirth ? null : new Date(user.dateOfBirth);

      // hide progress indicator once form is loaded
      vm.showProgress = false;

    }

    function cancel() {
      $mdDialog.cancel();
    }

    function save(user) {
      vm.showProgress = true;
      userApiService.updateUser(user)
        .then(function (response) {
          vm.showProgress = false;
          if (response.status === 200) {
            $mdDialog.hide();
          }
        });
    }

  }
