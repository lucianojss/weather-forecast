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

        var query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"%s\")";
        var url = "https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=";

        var request = {
          method: 'GET',
          url: url + query.replace("%s",location)
        }
        return $http(request);
      }
    }
}
