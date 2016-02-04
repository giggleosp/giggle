'use strict';

/**
 * @ngdoc directive
 * @name app.directive:uniqueUsername
 * @description
 * # uniqueUsername
 */

// TODO: ref: https://docs.angularjs.org/api/ng/type/ngModel.NgModelController

angular.module('app.directives', [])
  .directive('usernameExists', ['$q', 'userApiService', function ($q, userApiService) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {

        ngModel.$asyncValidators.usernameExists = function (modelValue, viewValue) {
          var value = modelValue || viewValue;

          var def = $q.defer();

          // model value is empty, exist directive
          if (!value || !ngModel) {
            return $q.when();
          }

          // call userApiService
          userApiService.usernameExists(value)
            .then(function (response) {
              if (response.data) {
                // username exists, not unique
                def.reject();
              } else {
                // username doesn't exist
                def.resolve();
              }
            });

          return def.promise;

        };
      }
    };
  }]);
