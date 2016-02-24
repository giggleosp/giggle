'use strict';

describe('Service: googleMapsApiService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var googleMapsApiService;
  beforeEach(inject(function (_googleMapsApiService_) {
    googleMapsApiService = _googleMapsApiService_;
  }));

  it('should do something', function () {
    expect(!!googleMapsApiService).toBe(true);
  });

});
