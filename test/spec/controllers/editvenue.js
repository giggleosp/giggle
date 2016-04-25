'use strict';

describe('Controller: EditvenueCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var EditvenueCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditvenueCtrl = $controller('EditvenueCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditvenueCtrl.awesomeThings.length).toBe(3);
  });
});
