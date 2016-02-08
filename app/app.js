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
    'ngFileUpload',
    'ngImgCrop',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'angularMoment'
  ])
  .config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
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
            controllerAs: 'vm',
            templateUrl: 'common/home/views/main.html'
          }
        }
      })
      .state('sign-in', {
        url: '/sign-in',
        access: 'anon',
        views: {
          main: {
            controller: 'LoginCtrl',
            controllerAs: 'vm',
            templateUrl: 'user/login/views/login.html'
          }
        }
      })
      .state('sign-up', {
        url: '/sign-up',
        access: 'anon',
        views: {
          main: {
            controller: 'SignUpCtrl',
            controllerAs: 'vm',
            templateUrl: 'user/signup/views/signup.html'
          }
        }
      });
  })
  .config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
      return moment(date).format('DD/MM/YYYY');
    };
  })
  .run(function ($rootScope, $cookies, $state, $stateParams, $location) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      var user = $cookies.get("user"); // retrieve user from session cookie (if any)

      if (toState.access === 'private' && !user) {
        // anonymous user trying to access a private page, prevent
        event.preventDefault();
       $state.transitionTo("sign-in"); // go to login page
      } else if (toState.access === 'anon' && user) {
        // authorised user trying to access page for anonymous users, such as login
        event.preventDefault();
      }

    });
  });
