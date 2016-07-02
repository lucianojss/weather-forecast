'use strict';

/**
 * @ngdoc overview
 * @name weatherForecastApp
 * @description
 * # weatherForecastApp
 *
 * Main module of the application.
 */
angular
  .module('weatherForecastApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngMessages',
    'ngAutocomplete'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/forecast/:query', {
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl',
        controllerAs: 'forecast',
        resolve: {
          query: function ($route) {
            return $route.current.params.query;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });

  });
