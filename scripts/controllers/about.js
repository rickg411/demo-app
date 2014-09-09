'use strict';

/**
 * @ngdoc function
 * @name demoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoAppApp
 */
angular.module('demoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
