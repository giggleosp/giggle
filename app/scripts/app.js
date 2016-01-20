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
    'app.controllers',
    'app.services',
    'app.directives',
    'app.constants',
    'ngMaterial',
    'ngMessages',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo', {
        'default': '500',
        'hue-1': '800'
      })
      .accentPalette('red', {
        'default': '500',
        'hue-1' : '700'
      })
      .backgroundPalette('grey', {
        'default': '200',
        'hue-3': '100'
      });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/sign-up', {
        templateUrl: 'views/signup.html',
        controller: 'SignUpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
