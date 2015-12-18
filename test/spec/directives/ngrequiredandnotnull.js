'use strict';

describe('Directive: ngRequiredAndNotNull', function () {

  // load the directive's module
  beforeEach(module('app'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-required-and-not-null></ng-required-and-not-null>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngRequiredAndNotNull directive');
  }));
});
