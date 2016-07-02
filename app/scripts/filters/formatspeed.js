'use strict';

/**
 * @ngdoc filter
 * @name weatherForecastApp.filter:formatSpeed
 * @function
 * @description
 * # formatSpeed
 * Filter in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .filter('formatSpeed', function () {
    return function(input, scale) {
      var value = parseInt(input, 10),
        convertedValue;

      if (isNaN(value)) throw new Error('Input is not a number');

      if (scale === 'mph') {
        convertedValue = Math.round(value * 0.62137);
      } else if (scale === 'km/h') {
        convertedValue = Math.round(value / 0.62137);
      } else if (scale === '' || scale == null){
        convertedValue = value;
      }else throw new Error('Not a valid scale');

      return convertedValue;
    };
  });
