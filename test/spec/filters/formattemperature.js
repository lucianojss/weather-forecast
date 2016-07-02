'use strict';

describe('Filter: formatTemperature', function () {

  // load the filter's module
  beforeEach(module('weatherForecastApp'));

  // initialize a new instance of the filter before each test
  var formatTemperature;
  beforeEach(inject(function ($filter) {
    formatTemperature = $filter('formatTemperature');
  }));

  it('should convert temperature from Celsius to Fahrenheit', function() {
    expect(formatTemperature(37, 'F')).toEqual(99);
  });

  it('should convert temperature from Fahrenheit to Celsius', function() {
    expect(formatTemperature(98.6, 'C')).toEqual(37);
  });

  it('should append a % to the converted value', function() {
    expect(formatTemperature(37, 'F', true)).toEqual('99\u00B0');
  });

  it('should throw an error if the scale is invalid', function() {
    expect(function() {
      formatTemperature(37, 'G');
    }).toThrow(new Error('Not a valid scale'));
  });

  it('should throw an error if value is not a number', function() {
    expect(function() {
      formatTemperature('test', 'F');
    }).toThrow(new Error('Input is not a number'));
  });

});
