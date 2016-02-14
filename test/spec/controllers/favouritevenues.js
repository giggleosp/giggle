'use strict';

describe('Controller: FavouritevenuesCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var FavouritevenuesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavouritevenuesCtrl = $controller('FavouritevenuesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FavouritevenuesCtrl.awesomeThings.length).toBe(3);
  });
});
