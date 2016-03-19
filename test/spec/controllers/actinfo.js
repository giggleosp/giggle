'use strict';

describe('Controller: ActinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var ActinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActinfoCtrl = $controller('ActinfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActinfoCtrl.awesomeThings.length).toBe(3);
  });
});
