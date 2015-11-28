'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'controllers',
    'services',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

  });
