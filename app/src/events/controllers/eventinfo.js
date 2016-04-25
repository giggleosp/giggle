'use strict';

/**
 * @ngdoc function
 * @name app.controller:EventinfoctrlCtrl
 * @description
 * # EventinfoctrlCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('EventInfoCtrl', EventInfoCtrl);

EventInfoCtrl.$inject = [
  'authService', '$mdDialog', 'event', 'googleMapsApiService', 'uiGmapGoogleMapApi',
  '$state', 'dateService', 'currencyApiService', '$log'
];

function EventInfoCtrl(authService, $mdDialog, event, googleMapsApiService, uiGmapGoogleMapApi,
                       $state, dateService, currencyApiService, $log) {
  var vm = this;

  // bind methods to viewmodel
  vm.moveToState = moveToState;
  vm.eventIsThisYear = eventIsThisYear;
  vm.eventIsToday = eventIsToday;
  vm.compareDates = compareDates;
  vm.compareMonths = compareMonths;
  vm.convertPriceToUserLocale = convertPriceToUserLocale;

  // viewmodel variables
  vm.event = event;

  $log.debug(event);
  
  vm.readMore = false;
  vm.refreshMap = false;

  init();

  function init() {
    if (authService.isLoggedIn()) {
      vm.currentUser = authService.getCurrentUser();

      if (vm.currentUser.country && vm.currentUser.country.id != vm.event.venue.country.id) {
        convertPriceToUserLocale();
      }

    }
    setUpMap();
  }

  function moveToState(state, id) {
    $state.go(state, {id: id});
    $mdDialog.hide();
  }

  function eventIsThisYear() {
    return dateService.isThisYear(vm.event.startDate);
  }

  function eventIsToday() {
    return dateService.isToday(vm.event.startDate);
  }

  function compareDates() {
    return dateService.compareDates(vm.event.startDate, vm.event.endDate);
  }

  function compareMonths() {
    return dateService.compareMonths(vm.event.startDate, vm.event.endDate);
  }

  // getting converted price on date event was created
  function convertPriceToUserLocale() {
    var date = vm.event.dateCreated;
    var eventCurrency = vm.event.venue.country.iso4217;
    var userCurrency = vm.currentUser.country.iso4217;

    currencyApiService.getExchangeRate(date, eventCurrency, userCurrency)
      .then(function (response) {
        var rates = response.data.rates;
        var rate = rates[Object.keys(rates)[0]]; // get first property of object
        vm.convertedPrice = vm.event.price * rate;
      });
  }

  function setUpMap() {
    vm.refreshMap = true;
    uiGmapGoogleMapApi.then(function () {
      var address = sprintf("%s, %s, %s, %s, %s",
        vm.event.venue.name, vm.event.venue.addressLine1,
        vm.event.venue.city.name, vm.event.venue.county.name,
        vm.event.venue.country.niceName);
      googleMapsApiService.getLocationByAddress(address)
        .then(function (response) {
          vm.foundOnMap = true;
          vm.options = { scrollwheel: false };
          vm.marker = {
            id: 0,
            coords: {
              latitude: response.lat,
              longitude: response.lng
            }
          };
          vm.map = { center: { latitude: response.lat, longitude: response.lng }, zoom: 18 };
        }, function () {
          vm.foundOnMap = false;
        });
    });
  }
}
