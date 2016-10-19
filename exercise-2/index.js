angular.module('myApp',[])
  .controller('FirstMessageController', function($scope) {
    $scope.message = 'hello'
  })
  .controller('SecondMessageController', function($scope) {
    var SMC = this
    SMC.message = 'hello'
  })
