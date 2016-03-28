'use strict';

describe('Controller: EventinfoctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var EventinfoctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventinfoctrlCtrl = $controller('EventinfoctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventinfoctrlCtrl.awesomeThings.length).toBe(3);
  });
});
