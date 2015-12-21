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

    $scope.user = {
      name: null,
      username: null,
      email: null,
      password: null,
      country: null,
      county: null
    };

    $scope.countries = null;
    $scope.counties = null;
    $scope.countrySearchText = "";

    $scope.countyPlaceholder = "What county are you from?";


    $scope.countryValueChange = function (oldValue, newValue) {

      if (newValue != oldValue) {
        // now empty the value in the counties dropdown if any
        if ($scope.user.county != null) {
          $scope.user.county = null;
        }

        var country = $scope.user.country;

        getCounties(country.id).then(function (counties) {
          $scope.counties = counties;
        });


        if ($scope.counties != null) {
          $scope.countyPlaceholder = "What part of " + country.niceName + " are you from?";
        }
        else if ($scope.country = ""){
          $scope.countyPlaceholder = "What county are you from?";
        } else {
          $scope.countyPlaceholder = "No county information available for " + country.niceName;
        }


      }

    };

    // get all countries to populate countries list on form
    countryService.getCountries()
      .then(function (response) {
        if (response.status === 200) {
          $scope.countries = response.data;
        }
      }, function (response) {
      });

    //$scope.getCounties = getCounties();

    function getCounties(id) {
      return countryService.getCountiesForCountry(id)
        .then(function (response) {
          return response.data;
        });
    }

  	$scope.signup = function (user) {

      userApiService.addUser(user)
        .then(function (response) {
          if (status === 200) {

          }
        }, function (response) {

        });
    }
  }]);
