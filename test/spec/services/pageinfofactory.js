'use strict';

describe('Service: pageInfoFactory', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var pageInfoFactory;
  beforeEach(inject(function (_pageInfoFactory_) {
    pageInfoFactory = _pageInfoFactory_;
  }));

  it('should do something', function () {
    expect(!!pageInfoFactory).toBe(true);
  });

});
