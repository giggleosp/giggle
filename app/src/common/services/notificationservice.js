'use strict';

/**
 * @ngdoc service
 * @name app.notificationService
 * @description
 * # notificationService
 * Service in the app.
 */
angular.module('app')
  .service('notificationService', notificationService);

  notificationService.$inject = [
    '$mdToast'
  ];

  function notificationService($mdToast) {
    // toast position
    var position = {
      bottom: true,
      top: false,
      left: false,
      right: true

    };
    var toastPosition = angular.extend({}, position);

    function getToastPosition() {
      return Object.keys(toastPosition)
        .filter(function(pos) { return toastPosition[pos]; })
        .join(' ');
    }

    return {
      showToast: function (textContent) {
        var toast = $mdToast.simple()
          .textContent(textContent)
          .action('OK')
          .highlightAction(true)
          .position(getToastPosition());
        $mdToast.show(toast);
      }
    }
  }
