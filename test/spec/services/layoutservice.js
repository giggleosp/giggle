'use strict';

describe('Service: layoutService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var layoutService;
  beforeEach(inject(function (_layoutService_) {
    layoutService = _layoutService_;
  }));

  it('should do something', function () {
    expect(!!layoutService).toBe(true);
  });

});
