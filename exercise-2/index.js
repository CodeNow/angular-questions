angular.module('myApp2',[])
  .controller('FirstMessageController', function($scope) {
    $scope.message = 'hello'
  })
  .controller('SecondMessageController', function($scope) {
    var SMC = this
    SMC.message = 'hello'
  })
