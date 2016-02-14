'use strict';

describe('Service: venueApiService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var venueApiService;
  beforeEach(inject(function (_venueApiService_) {
    venueApiService = _venueApiService_;
  }));

  it('should do something', function () {
    expect(!!venueApiService).toBe(true);
  });

});
