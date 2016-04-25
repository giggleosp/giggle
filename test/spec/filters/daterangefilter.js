'use strict';

describe('Filter: dateRangeFilter', function () {

  // load the filter's module
  beforeEach(module('app'));

  // initialize a new instance of the filter before each test
  var dateRangeFilter;
  beforeEach(inject(function ($filter) {
    dateRangeFilter = $filter('dateRangeFilter');
  }));

  it('should return the input prefixed with "dateRangeFilter filter:"', function () {
    var text = 'angularjs';
    expect(dateRangeFilter(text)).toBe('dateRangeFilter filter: ' + text);
  });

});
