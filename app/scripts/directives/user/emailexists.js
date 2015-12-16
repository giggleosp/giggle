'use strict';

/**
 * @ngdoc directive
 * @name app.directive:emailExists
 * @description
 * # emailExists
 */
angular.module('app.directives')
  .directive('emailExists', ['$q', 'userApiService', function ($q, userApiService) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {

        ngModel.$asyncValidators.emailExists = function (modelValue, viewValue) {
          var value = modelValue || viewValue;

          var def = $q.defer();

          // model value is empty, exist directive
          if (!value || !ngModel) {
            return $q.when();
          }

          // call userApiService
          userApiService.emailExists(value)
            .then(function (response) {
              if (response.data) {
                // email exists, not unique
                def.reject();
              } else {
                // email doesn't exist
                def.resolve();
              }
            });

          return def.promise;

        };
      }
    };
  }]);
