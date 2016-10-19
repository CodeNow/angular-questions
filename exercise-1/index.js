angular.module('myApp',[]).controller('MessageController', function($scope) {
  $scope.getMessage = function() {
    setTimeout(function() {
      $scope.message = 'Fetched after 3 seconds';
      console.log('message:'+$scope.message);
    }, 200);
  }
  $scope.getMessage();
});
