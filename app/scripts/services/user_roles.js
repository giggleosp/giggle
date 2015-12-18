'use strict';

/**
 * @ngdoc service
 * @name app.USERROLES
 * @description
 * # USERROLES
 * Constant in the app.
 */
angular.module('app')
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest',
    fan: 'fan',
    entertainer: 'entertainer',
    venue: 'venue'
  });
