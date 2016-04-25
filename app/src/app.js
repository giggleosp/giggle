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
    'app.filters',
    'app.directives',
    'app.constants',
    'app.factories',
    'ngMaterial',
    'ngMessages',
    'ngAnimate',
    'ngCookies',
    'ngFileUpload',
    'ngImgCrop',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'angularMoment',
    'ngFileUpload',
    'ngLodash',
    'uiGmapgoogle-maps'
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
  .config(function ($mdIconProvider) {
    $mdIconProvider
      .defaultFontSet('fa')
      .defaultIconSet('../assets/svg/icons.svg', 24)
      .icon('menu', '../assets/svg/menu.svg', 24)
      .icon('more_vert', '../assets/svg/more_vert.svg', 24)
      .icon('home', '../assets/svg/home.svg', 24)
      .icon('local_activity', '../assets/svg/local_activity.svg', 24)
      .icon('location_on', '../assets/svg/location_on.svg', 24)
      .icon('music_note', '../assets/svg/music_note.svg', 24)
      .icon('theaters', '../assets/svg/theaters.svg', 24)
      .icon('tag_faces', '../assets/svg/tag_faces.svg', 24)
      .icon('library_music', '../assets/svg/library_music.svg', 24)
      .icon('local_play', '../assets/svg/local_play.svg', 24)
      .icon('local_bar', '../assets/svg/local_bar.svg', 24)
      .icon('settings', '../assets/svg/settings.svg', 24)
      .icon('exit_to_app', '../assets/svg/exit_to_app.svg', 24)
      .icon('add', '../assets/svg/add.svg', 24)
      .icon('event', '../assets/svg/event.svg', 24)
      .icon('info_outline', '../assets/svg/info_outline.svg', 24)
      .icon('star', '../assets/svg/star.svg', 24)
      .icon('star_half', '../assets/svg/star_half.svg', 24)
      .icon('my_location', '../assets/svg/my_location.svg', 24)
      .icon('search', '../assets/svg/search.svg', 24)
      .icon('arrow_back', '../assets/svg/arrow_back.svg', 24)
      .icon('person_add', '../assets/svg/person_add.svg', 24)
      .icon('person', '../assets/svg/person.svg', 24)
      .icon('person_outline', '../assets/svg/person_outline.svg', 24)
      .icon('location_searching', '../assets/svg/location_searching.svg', 24)
      .icon('add_a_photo', '../assets/svg/add_a_photo.svg', 24)
      .icon('euro_symbol', '../assets/svg/euro_symbol.svg', 24)
      .icon('phone', '../assets/svg/phone.svg', 24)
      .icon('email', '../assets/svg/email.svg', 24)
      .icon('language', '../assets/svg/language.svg', 24)
      .icon('facebook', '../assets/svg/facebook.svg', 24)
      .icon('twitter', '../assets/svg/twitter.svg', 24)
      .icon('google_plus', '../assets/svg/google_plus.svg', 24)
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when("/venues", "/venues/recommended");
    $urlRouterProvider.when("/acts", "/acts/recommended");
    $urlRouterProvider.when("/events", "/events/recommended");

    $stateProvider
      .state('main', {
        url: '/',
        access: 'public',
        views: {
          main: {
            controller: 'MainCtrl',
            controllerAs: 'vm',
            templateUrl: 'src/home/views/main.html'
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
            templateUrl: 'src/user/login/views/login.html'
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
            templateUrl: 'src/user/signup/views/signup.html'
          }
        }
      })
      .state('venues', {
        abstract: true,
        url: '/venues',
        views: {
          tabs: {
            templateUrl: 'src/venues/views/partials/tabs.tpl.html',
            controller: 'VenuesCtrl',
            controllerAs: 'vm'
          },
          main: {
            templateUrl: 'src/venues/views/venues.html',
            controller: 'VenuesCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('venues.recommended', {
        url: '/recommended',
        templateUrl: 'src/venues/views/venues.recommended.html',
        controller: 'VenuesCtrl',
        controllerAs: 'vm'
      })
      .state('venues.sports', {
        url: '/sports',
        templateUrl: 'src/venues/views/venues.sports.html',
        controller: 'VenuesCtrl',
        controllerAs: 'vm'
      })
      .state('venues.local', {
        url: '/local',
        templateUrl: 'src/venues/views/venues.local.html',
        controller: 'VenuesCtrl',
        controllerAs: 'vm'
      })
      .state('venues.bars', {
        url: '/bars',
        templateUrl: 'src/venues/views/venues.bars.html',
        controller: 'VenuesCtrl',
        controllerAs: 'vm'
      })
      .state('venues.music', {
        url: '/music',
        templateUrl: 'src/venues/views/venues.music.html',
        controller: 'VenuesCtrl',
        controllerAs: 'vm'
      })
      .state('venues.theatre', {
        url: '/theatre',
        templateUrl: 'src/venues/views/venues.theatre.html',
        controller: 'VenuesCtrl',
        controllerAs: 'vm'
      })
      .state('venues.favourites', {
        url: '/favourites',
        templateUrl: 'src/venues/views/venues.favourites.html',
        controller: 'VenuesCtrl',
        controllerAs: 'vm'
      })
      .state('venues.yours', {
        url: '/yours',
        templateUrl: 'src/venues/views/venues.yours.html',
        controller: 'MyVenuesCtrl',
        controllerAs: 'vm'
      })
      .state('venues.venue', {
        url: '/:id',
        templateUrl: 'src/venues/views/venues.venue.html',
        controller: 'VenueCtrl',
        controllerAs: 'vm'
      })
      .state('acts', {
        //abstract: true,
        url: '/acts',
        views: {
          tabs: {
            templateUrl: 'src/acts/views/partials/tabs.tpl.html',
            controller: 'ActsCtrl',
            controllerAs: 'vm'
          },
          main: {
            templateUrl: 'src/acts/views/acts.html',
            controller: 'ActsCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('acts.recommended', {
        url: '/recommended',
        templateUrl: 'src/acts/views/acts.recommended.html',
        controller: 'ActsCtrl',
        controllerAs: 'vm'
      })
      .state('acts.local', {
        url: '/local',
        templateUrl: 'src/acts/views/acts.local.html',
        controller: 'ActsCtrl',
        controllerAs: 'vm'
      })
      .state('acts.comedy', {
        url: '/comedy',
        templateUrl: 'src/acts/views/acts.comedy.html',
        controller: 'ActsCtrl',
        controllerAs: 'vm'
      })
      .state('acts.music', {
        url: '/music',
        templateUrl: 'src/acts/views/acts.music.html',
        controller: 'ActsCtrl',
        controllerAs: 'vm'
      })
      .state('acts.sports', {
        url: '/sports',
        templateUrl: 'src/acts/views/acts.sports.html',
        controller: 'ActsCtrl',
        controllerAs: 'vm'
      })
      .state('acts.theatre', {
        url: '/theatre',
        templateUrl: 'src/acts/views/acts.theatre.html',
        controller: 'ActsCtrl',
        controllerAs: 'vm'
      })
      .state('acts.favourites', {
        url: '/favourites',
        templateUrl: 'src/acts/views/acts.favourites.html',
        controller: 'ActsCtrl',
        controllerAs: 'vm'
      })
      .state('acts.yours', {
        url: '/yours',
        templateUrl: 'src/acts/views/acts.yours.html',
        controller: 'MyActsCtrl',
        controllerAs: 'vm'
      })
      .state('acts.act', {
        url: '/:id',
        templateUrl: 'src/acts/views/acts.act.html',
        controller: 'ActCtrl',
        controllerAs: 'vm'
      })
      .state('events', {
        abstract:true,
        url: '/events',
        views: {
          tabs: {
            templateUrl: 'src/events/views/partials/tabs.tpl.html',
            controller: 'EventsCtrl',
            controllerAs: 'vm'
          },
          main: {
            templateUrl: 'src/events/views/events.html',
            controller: 'EventsCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('events.recommended', {
        url: '/recommended',
        templateUrl: 'src/events/views/events.recommended.html',
        controller: 'RecommendedEventsCtrl',
        controllerAs: 'vm'
      })
      .state('events.local', {
        url: '/local',
        templateUrl: 'src/events/views/events.local.html',
        controller: 'RecommendedEventsCtrl',
        controllerAs: 'vm'
      })
      .state('events.music', {
        url: '/music',
        templateUrl: 'src/events/views/events.music.html',
        controller: 'RecommendedEventsCtrl',
        controllerAs: 'vm'
      })
      .state('events.sports', {
        url: '/sports',
        templateUrl: 'src/events/views/events.sports.html',
        controller: 'RecommendedEventsCtrl',
        controllerAs: 'vm'
      })
      .state('events.theatre', {
        url: '/theatre',
        templateUrl: 'src/events/views/events.theatre.html',
        controller: 'RecommendedEventsCtrl',
        controllerAs: 'vm'
      })
      .state('events.comedy', {
        url: '/comedy',
        templateUrl: 'src/events/views/events.comedy.html',
        controller: 'RecommendedEventsCtrl',
        controllerAs: 'vm'
      })
      .state('events.festivals', {
        url: '/festivals',
        templateUrl: 'src/events/views/events.festivals.html',
        controller: 'RecommendedEventsCtrl',
        controllerAs: 'vm'
      })
      .state('events.following', {
        url: '/following',
        views: {
          main: {
            templateUrl: 'src/events/views/events.following.html',
            controller: 'EventsCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('events.event', {
        url: '/:id',
        templateUrl: 'src/events/views/events.event.html',
        controller: 'EventCtrl',
        controllerAs: 'vm'
      });
  })
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCZNTiE8tjnl72tbgJi80JlobAJ30vG3fk', // TODO: Move somewhere secure
      v: '3.23', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  })
  .config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.parseDate = function(dateString) {
      var m = moment(dateString, 'MM-DD-YYYY', true);
      return m.isValid() ? m.toDate() : new Date(NaN);
    };
    $mdDateLocaleProvider.formatDate = function(date) {
      return !date ? null : moment(date).format('DD/MM/YYYY');
    };
  })
  .run(function ($rootScope, $cookies, $state, $stateParams, $location) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      var user = $cookies.get("user"); // retrieve user from session cookie (if any)

      if (toState.access === 'private' && !user) {
        // anonymous user trying to access a private page, prevent
        event.preventDefault();
       $state.go("sign-in"); // go to login page
      } else if (toState.access === 'anon' && user) {
        // authorised user trying to access page for anonymous users, such as login
        event.preventDefault();
      }

    });
  });
