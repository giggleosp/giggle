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
    admin: 'admin',
    editor: 'editor',
    user: 'user',
    act: 'act',
    venue: 'venue'
  });
