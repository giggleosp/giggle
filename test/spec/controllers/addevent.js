'use strict';

describe('Controller: AddeventCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var AddeventCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddeventCtrl = $controller('AddeventCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddeventCtrl.awesomeThings.length).toBe(3);
  });
});
