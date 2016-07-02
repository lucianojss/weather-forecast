'use strict';

describe('Filter: formatSpeed', function () {

  // load the filter's module
  beforeEach(module('weatherForecastApp'));

  // initialize a new instance of the filter before each test
  var formatSpeed;
  beforeEach(inject(function ($filter) {
    formatSpeed = $filter('formatSpeed');
  }));


  it('should convert speed from mph to km/h', function() {
    expect(formatSpeed(50, 'km/h')).toEqual(80);
  });


  it('should convert speed from km/h to mph', function() {
    expect(formatSpeed(80, 'mph')).toEqual(50);
  });

  it('should throw an error if the scale is invalid', function() {
    expect(function() {
      formatSpeed(50, 'T');
    }).toThrow(new Error('Not a valid scale'));
  });

  it('should throw an error if value is not a number', function() {
    expect(function() {
      formatSpeed('test', 'mph');
    }).toThrow(new Error('Input is not a number'));
  });


});
