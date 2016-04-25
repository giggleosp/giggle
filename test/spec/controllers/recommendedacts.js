'use strict';

describe('Controller: RecommendedactsCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var RecommendedactsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecommendedactsCtrl = $controller('RecommendedactsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecommendedactsCtrl.awesomeThings.length).toBe(3);
  });
});
