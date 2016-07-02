'use strict';

/**
 * @ngdoc directive
 * @name weatherForecastApp.directive:headerWeather
 * @description
 * # headerWeather
 */
angular.module('weatherForecastApp')
  .directive('headerWeather', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
      controller: function ($scope,$location,$cookies) {

        $scope.checkIfRoot = function () {
          if($location.path() === '/' || $location.path() == null){
            $scope.isRoot = true;
          }else $scope.isRoot = false;
        }

        //set cookie
        if($cookies.get("metric") === 'true')
          $scope.selectedMetric = true;
        else $scope.selectedMetric = false;

        $scope.checkIfRoot();

        $scope.$on('$routeChangeStart', function(next, current) {
          $scope.checkIfRoot();
        });

        $scope.updateMetrics = function () {
          $scope.$broadcast('metricChanged',$scope.selectedMetric);
        }

        $scope.goBack = function () {
          $location.path('/');
        }
      }
    };
  });
