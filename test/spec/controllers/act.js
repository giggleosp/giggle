'use strict';

describe('Controller: ActCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var ActCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActCtrl = $controller('ActCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActCtrl.awesomeThings.length).toBe(3);
  });
});
