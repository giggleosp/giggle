'use strict';

describe('Service: eventsApiService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var eventsApiService;
  beforeEach(inject(function (_eventsApiService_) {
    eventsApiService = _eventsApiService_;
  }));

  it('should do something', function () {
    expect(!!eventsApiService).toBe(true);
  });

});
