'use strict';

describe('Service: countryApiService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var countryApiService;
  beforeEach(inject(function (_countryApiService_) {
    countryApiService = _countryApiService_;
  }));

  it('should do something', function () {
    expect(!!countryApiService).toBe(true);
  });

});
