'use strict';

describe('Controller: AddvenueCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var AddvenueCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddvenueCtrl = $controller('AddvenueCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddvenueCtrl.awesomeThings.length).toBe(3);
  });
});
