'use strict';

describe('Directive: ngImageClickUpload', function () {

  // load the directive's module
  beforeEach(module('app'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-image-click-upload></ng-image-click-upload>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngImageClickUpload directive');
  }));
});
