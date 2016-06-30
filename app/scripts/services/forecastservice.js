'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.forecastService
 * @description
 * # forecastService
 * Service in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .service('forecastService',forecastService);

forecastService.$inject = ['$http'];

function forecastService($http) {
    return{
      getForecastbyLocation: function (location) {

        var request = {
          method: 'GET',
          url: 'https://query.yahooapis.com/v1/public/yql?q=select wind from weather.forecast where woeid in (select woeid from geo.places(1) where text='+ location +')&format=json&callback=callbackFunction"',
        }
        return $http(request);
      }
    }
}
