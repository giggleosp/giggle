'use strict';

/**
 * @ngdoc directive
 * @name app.directive:passwordStrength
 * @description
 * # passwordStrength
 */
angular.module('app.directives')
  .directive('passwordStrength', ['$q', function ($q) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {

        ngModel.$asyncValidators.passwordStrength = function (modelValue, viewValue) {
          var value = modelValue || viewValue;

          if (!value || !ngModel) return $q.when();

          var def = $q.defer();

          // TODO: http://stackoverflow.com/a/1559788
          var regexp = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!£$%^&*-+=#@]){8,}.+$");

          if(regexp.test(value)) {
            def.resolve();
          } else {
           def.reject();
          }

          return def.promise;


        };
      }
    };
  }]);
