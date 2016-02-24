'use strict';

describe('Controller: VenueinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var VenueinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VenueinfoCtrl = $controller('VenueinfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VenueinfoCtrl.awesomeThings.length).toBe(3);
  });
});
