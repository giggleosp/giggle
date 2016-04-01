'use strict';

describe('Service: currencyApiService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var currencyApiService;
  beforeEach(inject(function (_currencyApiService_) {
    currencyApiService = _currencyApiService_;
  }));

  it('should do something', function () {
    expect(!!currencyApiService).toBe(true);
  });

});
