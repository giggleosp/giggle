'use strict';

describe('Service: actsApiService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var actsApiService;
  beforeEach(inject(function (_actsApiService_) {
    actsApiService = _actsApiService_;
  }));

  it('should do something', function () {
    expect(!!actsApiService).toBe(true);
  });

});
