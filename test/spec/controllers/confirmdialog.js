'use strict';

describe('Controller: ConfirmdialogCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var ConfirmdialogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmdialogCtrl = $controller('ConfirmdialogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConfirmdialogCtrl.awesomeThings.length).toBe(3);
  });
});
