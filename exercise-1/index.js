console.log('include app')

angular.module('myApp1', [])
.controller('MessageController', function ($scope) {
  this.getMessage = $scope.getMessage = function() {
    setTimeout(function() {
      $scope.message = 'Fetched after 3 seconds';
      console.log('message:'+$scope.message);
    }, 200);
  }
  $scope.getMessage();
});
