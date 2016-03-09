'use strict';

/**
 * @ngdoc service
 * @name app.photoApiService
 * @description
 * # photoApiService
 * Service in the app.
 */
angular.module('app')
  .service('photoApiService', photoApiService);

photoApiService.$inject = ['Upload'];

function photoApiService(Upload) {
  var baseUrl = "http://localhost:8080/";

}
