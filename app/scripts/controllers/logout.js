'use strict';

/**
 * @ngdoc function
 * @name app.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the app
 */
angular.module('app.controllers')
  .controller('LogoutCtrl', ['$rootScope', '$scope', '$mdDialog', 'AUTH_EVENTS', function ($rootScope, $scope, $mdDialog, AUTH_EVENTS) {

    $scope.confirmLogout = function (ev) {

      //$log.debug("1");

    	var confirm = $mdDialog.confirm()
    		.title("Confirm Log Out")
    		.textContent("Are you sure you want to log out?")
    		.ariaLabel("Confirm Log Out")
    		.targetEvent(ev)
    		.ok("OK")
    		.cancel("Cancel");
    	$mdDialog.show(confirm)
    		.then(function () {
    			// log out
    			$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
    		}, function () {
    			// do nothing
    		});
    };

  }]);
