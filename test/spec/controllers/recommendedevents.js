'use strict';

describe('Controller: RecommendedeventsCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var RecommendedeventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecommendedeventsCtrl = $controller('RecommendedeventsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecommendedeventsCtrl.awesomeThings.length).toBe(3);
  });
});
