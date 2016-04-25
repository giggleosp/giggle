'use strict';

describe('Filter: selectedKeywords', function () {

  // load the filter's module
  beforeEach(module('app'));

  // initialize a new instance of the filter before each test
  var selectedKeywords;
  beforeEach(inject(function ($filter) {
    selectedKeywords = $filter('selectedKeywords');
  }));

  it('should return the input prefixed with "selectedKeywords filter:"', function () {
    var text = 'angularjs';
    expect(selectedKeywords(text)).toBe('selectedKeywords filter: ' + text);
  });

});
