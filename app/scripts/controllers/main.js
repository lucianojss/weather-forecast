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

mainController.$inject = ['$scope','$location'];

function mainController($scope,$location) {
  $scope.loading = false;
  $scope.address = "";

  $scope.requestForecast = function(){

      var trimmedAddress = $scope.address.trim();

      if(trimmedAddress != null && trimmedAddress.length > 0){
        $location.path('/forecast/'+trimmedAddress);
      }
  };
}
