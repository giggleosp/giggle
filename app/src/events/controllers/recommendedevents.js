'use strict';

/**
 * @ngdoc function
 * @name app.controller:RecommendedEventsCtrl
 * @description
 * # RecommendedeventsCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('RecommendedEventsCtrl', RecommendedEventsCtrl);

RecommendedEventsCtrl.$inject = [
  '$rootScope', 'authService', 'eventsApiService', 'dateService', 'layoutService',
  'countryApiService', '$log', '$state'
];

function RecommendedEventsCtrl($rootScope, authService, eventsApiService, dateService, layoutService,
                               countryApiService, $log, $state) {
  var vm = this;

  vm.currentUser = authService.getCurrentUser();
  vm.events = [];
  vm.cities = [];

  // filter array holders
  vm.selectedCities = [];
  vm.keywords = [];

  vm.eventIsThisYear = eventIsThisYear;
  vm.selectedCitiesArray = selectedCitiesArray;
  vm.setNumberOfCardsPerRow = setNumberOfCardsPerRow;

  init();

  function init() {
    vm.cardsPerRow = layoutService.getNumberOfCardsPerRow();
    getEvents();
    getCities();
  }

  function getEvents() {
    eventsApiService.getEvents()
      .then(function (response) {
        vm.events = response.data;
      });
  }

  function getCities() {
    countryApiService.getCities()
      .then(function (response) {
        vm.cities = response.data;
      })
  }

  function selectedCitiesArray(event) {
    if (vm.selectedCities.length > 1) {
      angular.forEach(city|vm.selectedCities, function () {
        if (event.venue.city.id == city.id) {
          return true;
        }
      });
    }
    return true;
  }

  function eventIsThisYear(date) {
    return dateService.isThisYear(date);
  }

  function setNumberOfCardsPerRow() {
    vm.cardsPerRow = layoutService.getNumberOfCardsPerRow();
  }

  $rootScope.$watch('navigation-menu-state-changed', function () {
    setNumberOfCardsPerRow();
  });

  $(window).resize(function () {
    setNumberOfCardsPerRow();
  });

}
