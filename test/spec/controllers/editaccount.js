'use strict';

describe('Controller: EditaccountCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var EditaccountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditaccountCtrl = $controller('EditaccountCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditaccountCtrl.awesomeThings.length).toBe(3);
  });
});
