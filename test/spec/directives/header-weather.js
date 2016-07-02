'use strict';

describe('Directive: headerWeather', function () {

  // load the directive's module
  beforeEach(module('weatherForecastApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<header-weather></header-weather>');
    element = $compile(element)(scope);
    console.log(element);
    expect(element.text()).toBe('this is the headerWeather directive');
  }));
});
