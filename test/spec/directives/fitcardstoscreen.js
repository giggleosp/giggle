'use strict';

describe('Directive: FitCardsToScreen', function () {

  // load the directive's module
  beforeEach(module('app'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-fit-cards-to-screen></-fit-cards-to-screen>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the FitCardsToScreen directive');
  }));
});
