'use strict';

/**
 * @ngdoc service
 * @name app.AUTHEVENTS
 * @description
 * # AUTHEVENTS
 * Constant in the app.
 */
angular.module('app.constants', [])
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorised: 'auth-not-authorised'
  });
