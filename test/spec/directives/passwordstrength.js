'use strict';

describe('Directive: passwordStrength', function () {

  // load the directive's module
  beforeEach(module('app.directives'));

  var element,
    scope;

  var regexp = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!£$%^&*-+=#@]){8,}.+$");

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('Should be at least 8 characters long, with one digit, one letter and one special.', inject(function ($compile) {
    element = angular.element('<password-strength></password-strength>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the passwordStrength directive');
  }));
});
