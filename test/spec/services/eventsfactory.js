'use strict';

describe('Service: eventsFactory', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var eventsFactory;
  beforeEach(inject(function (_eventsFactory_) {
    eventsFactory = _eventsFactory_;
  }));

  it('should do something', function () {
    expect(!!eventsFactory).toBe(true);
  });

});
