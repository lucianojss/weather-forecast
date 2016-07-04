'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherForecastApp
 */
angular.module('weatherForecastApp')
  .controller('ForecastCtrl', forecastController);

forecastController.$inject = ['$scope', 'query', 'forecastService', '$location', '$cookies'];

function forecastController($scope, query, forecastService, $location, $cookies) {

  $scope.loadWeather = function () {

    $scope.loading = true;
    $scope.error = false;

    //check if query exists
    if (query == null && query.length == 0) {
      $location.path('/');
    }

    $scope.address = query;

    forecastService.getForecastbyLocation($scope.address)
      .then(function successCallback(data) {
        console.log(data);
        if (data.data.query.results != null) {
          $scope.notfound = false;
          //get units
          $scope.location = data.data.query.results.channel.location;
          $scope.atmosphere = data.data.query.results.channel.atmosphere;
          $scope.astronomy = data.data.query.results.channel.astronomy;
          $scope.wind = data.data.query.results.channel.wind;
          $scope.date = data.data.query.results.channel.lastBuildDate;
          $scope.item = data.data.query.results.channel.item.condition;
          $scope.forecasts = data.data.query.results.channel.item.forecast;

          $scope.updateMetrics();
        } else {
          //weather not found
          $scope.notfound = true;
        }

        $scope.loading = false;
      }, function errorCallback(error) {
        $scope.loading = false;
        $scope.error = true;
      });
  }

  $scope.loadWeather();

  $scope.updateMetrics = function () {

    $scope.currentMetric = $cookies.get("metric");

    //nochange
    if ($scope.currentMetric != $scope.selectedMetric) {

      $scope.currentMetric = $scope.selectedMetric;
      $cookies.put("metric", $scope.currentMetric);
    }

    if($scope.currentMetric == true)
      $scope.units = $scope.imperialUnit;
    else
      $scope.units = $scope.metricUnit;

  }

  $scope.metricUnit = {
    "distance": "km",
    "pressure": "in",
    "speed": "km/h",
    "temperature": "C",
    "conversion" : "C",
    "speedConversion": "km/h",
  };

  $scope.imperialUnit = {
    "distance": "mi",
    "pressure": "in",
    "speed": "mph",
    "temperature": "F",
    "conversion" : "",
    "speedConversion": "",
  };

  $scope.$on('metricChanged', function(event, data) {
    $scope.updateMetrics();
  });


}
