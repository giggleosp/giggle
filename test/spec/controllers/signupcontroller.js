'use strict';

describe('Controller: SignupcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('giggleApp'));

  var SignupcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignupcontrollerCtrl = $controller('SignupcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SignupcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
