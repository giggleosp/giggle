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
    // 'ngRoute',
    'ui.router',
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
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        access: 'public',
        views: {
          main: {
            controller: 'MainCtrl',
            templateUrl: 'home/views/main.html'
          }
        }
      })
      .state('login', {
        url: '/login',
        access: 'anon',
        views: {
          main: {
            controller: 'LoginCtrl',
            templateUrl: 'login/views/login.html'
          }
        }
      })
      .state('signup', {
        url: '/signup',
        access: 'anon',
        views: {
          main: {
            controller: 'SignUpCtrl',
            templateUrl: 'signup/views/signup.html'
          }
        }
      });
  })
  .run(function ($rootScope, $cookies, $state, $stateParams, $location) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      var user = $cookies.get("user"); // retrieve user from session cookie (if any)

      if (toState.access === 'private' && !$cookies.user) {
        // anonymous user trying to access a private page, prevent
        event.preventDefault();
       $state.transitionTo("login"); // go to login page
      } else if (toState.access === 'anon' && user) {
        // authorised user trying to access page for anonymous users, such as login
        event.preventDefault();
      }

    });
  });
