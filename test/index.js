'use strict'

describe('MessageController', function () {
  let $controller
  let scope
  let controller

  beforeEach(function () { module('myApp') })
  beforeEach(inject(function (_$controller_, $rootScope) {
    $controller = _$controller_
    scope = $rootScope.$new();
    controller = $controller('MessageController', {
      $scope: scope
    });
  }));

  it('should have a `getMessage` function', function () {
    expect(scope.getMessage).to.be.a('function')
  })

})
