'use strict';

/**
 * @ngdoc function
 * @name app.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the app
 */

angular.module('app.controllers')
  .controller('SignUpCtrl', ['$log', '$scope', 'userApiService', 'countryService', function ($log, $scope, userApiService, countryService) {

    $scope.countries = {};
    $scope.counties = null;

    getCountries()
      .then(function (response) {
        $log.debug(response);
        $scope.countries = response.data;
      });

    $scope.countryValueChanged = function (id) {
      getCounties(id);
    };

    function getCountries() {
      return countryService.getCountries()
        .then(function (response) {
          return response;
        });
    }

    function getCounties(id) {
      return countryService.getCountiesForCountry(id)
        .then(function (response) {
          if (response.status === 200) {
            $scope.counties = response.data;
          }
        }, function (response) {
          $scope.counties = null;
        });
    }

  }]);
