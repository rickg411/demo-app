'use strict';

/**
 * @ngdoc function
 * @name demoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoAppApp
 */
var mainctrl = angular.module('demoApp');

mainctrl.controller('MainCtrl', [ '$scope', '$http', function ($scope, $http) {
  
    $scope.test = 'Hello world';
    $scope.method = 'GET';
    $scope.url = 'http://api.randomuser.me/';// AppAPI URL;
    
    $http({method: $scope.method, url: $scope.url, params: {results:'10'} }).
        success(function(data, status) {
          $scope.status = status.status;
          $scope.users = data.results;      
        }).
        error(function(data, status) {
          $scope.data = data.error || 'Request failed';
          $scope.status = status.status;
      });
      
$scope.predicate = 'user.name.last';
    
$scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
                                    
$scope.removeUser = function(userToRemove) {
    var index = $scope.users.indexOf(userToRemove);
    $scope.users.splice(index, 1);
  };

$scope.addUser=function(){
   $scope.users.push({name:$scope.ModelText});
    $scope.ModelText='';
  };
    
}]);