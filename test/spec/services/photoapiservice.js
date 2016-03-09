'use strict';

describe('Service: photoApiService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var photoApiService;
  beforeEach(inject(function (_photoApiService_) {
    photoApiService = _photoApiService_;
  }));

  it('should do something', function () {
    expect(!!photoApiService).toBe(true);
  });

});
