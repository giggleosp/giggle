'use strict';

/**
 * @ngdoc function
 * @name app.controller:EditaccountCtrl
 * @description
 * # EditaccountCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('EditAccountCtrl', EditAccountCtrl);

  EditAccountCtrl.$inject = [
    '$rootScope',
    'userApiService',
    'countryApiService',
    '$mdDialog',
    'notificationService'
  ];

  function EditAccountCtrl ($rootScope, userApiService, countryApiService, $mdDialog, notificationService) {
    var vm = this;

    // stitch $scope methods to controller
    vm.getCountiesForCountry = getCountiesForCountry;
    vm.getCitiesForCounty = getCitiesForCounty;
    vm.cancel = cancel;
    vm.save = save;

    getCountries();
    getUser();

    function getUser() {
      userApiService.getUserFromCookies()
        .then(function (response) {
          preFillForm(response.data);
        });
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

      vm.placeholder = "/app/assets/img/default-avatar.png";

      vm.user = {
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        dateOfBirth: new Date(user.dateOfBirth),
        country: user.country,
        county: user.county,
        city: user.city,
        imageUri: user.imageUri === null ? null : user.imageUri
      };

    }

    function cancel() {
      $mdDialog.cancel();
    }

    function save(user) {
      userApiService.updateUser(user)
        .then(function () {
          $mdDialog.cancel();
        }, function () {

        });
    }

  }
