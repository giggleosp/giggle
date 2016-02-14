'use strict';

describe('Controller: VenuesctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var VenuesctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VenuesctrlCtrl = $controller('VenuesctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VenuesctrlCtrl.awesomeThings.length).toBe(3);
  });
});
