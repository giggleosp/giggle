'use strict';

describe('Controller: ActsCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var ActsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActsCtrl = $controller('ActsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActsCtrl.awesomeThings.length).toBe(3);
  });
});
