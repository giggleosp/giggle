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
    admin: 'ROLE_ADMIN',
    user: 'ROLE_USER',
    act: 'ROLE_ACT',
    venue: 'ROLE_VENUE'
  });
