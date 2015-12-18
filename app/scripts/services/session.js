'use strict';

/**
 * @ngdoc service
 * @name app.Session
 * @description
 * # Session
 * Services in the app.
 */
angular.module('app')
  .service('Session', function () {

    this.create = function (userId, userRole) {
      this.userId = userId;
      this.userRole = userRole;
    };
    this.destroy = function () {
      this.userId = null;
      this.userRole = null;
    };

  });
