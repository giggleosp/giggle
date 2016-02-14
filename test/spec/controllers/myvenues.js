'use strict';

describe('Controller: MyvenuesCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var MyvenuesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyvenuesCtrl = $controller('MyvenuesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyvenuesCtrl.awesomeThings.length).toBe(3);
  });
});
