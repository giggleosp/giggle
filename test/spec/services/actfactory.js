'use strict';

describe('Service: actFactory', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var actFactory;
  beforeEach(inject(function (_actFactory_) {
    actFactory = _actFactory_;
  }));

  it('should do something', function () {
    expect(!!actFactory).toBe(true);
  });

});
