angular.module('myApp3',[])
  .service('getGithubUser', function ($http) {
    // Fetch service from 'https://api.github.com/users/Runnable?acces_token=b932e522876601b55aa9ab00e88b1697d5e7249e'
  })
  .controller('UserController', function($scope, getGithubUser) {
    var UC = this
  })
