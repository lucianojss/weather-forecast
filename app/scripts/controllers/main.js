'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherForecastApp
 */
angular.module('weatherForecastApp')
  .controller('MainCtrl', mainController);

mainController.$inject = ['$scope','forecastService'];

function mainController($scope,forecastService) {

  $scope.address = "";
  $scope.requestForecast = function(){

    forecastService.getForecastbyLocation($scope.address)
      .then(function successCallback(data) {

        console.log(data);

      }, function errorCallback(error) {
        //TODO
      });
      //console.log("simmmm"+$scope.address);
  };

}
