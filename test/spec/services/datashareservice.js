'use strict';

describe('Service: dataShareService', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var dataShareService;
  beforeEach(inject(function (_dataShareService_) {
    dataShareService = _dataShareService_;
  }));

  it('should do something', function () {
    expect(!!dataShareService).toBe(true);
  });

});
