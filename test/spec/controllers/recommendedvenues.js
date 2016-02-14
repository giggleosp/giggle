'use strict';

describe('Controller: RecommendedvenuesCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var RecommendedvenuesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecommendedvenuesCtrl = $controller('RecommendedvenuesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecommendedvenuesCtrl.awesomeThings.length).toBe(3);
  });
});
