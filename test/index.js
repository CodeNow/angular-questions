'use strict'

describe('Exercise #3', function () {
  let $controller
  let scope
  let controller

  beforeEach(() => module('myApp'))

  describe('getGithubUser', () => {
    let getGithubUser
    let httpGetStub

    beforeEach(inject(function (_getGithubUser_, _$http_) {
      getGithubUser = _getGithubUser_
      httpGetStub = sinon.stub(_$http_, 'get')
    }))

    it('should call the $http service with the URL', function () {
      return getGithubUser('thejsj')
      .then(() => {
        sinon.assert.calledOnce(httpGetStub)
      })
    })
  })

  describe('UserController', () => {
    beforeEach(inject(function (_$controller_, $rootScope) {
      $controller = _$controller_
      scope = $rootScope.$new();
      controller = $controller('UserController', {
        $scope: scope
      });
    }));

    it('should have a `getMessage` function', function () {
      expect(scope.getMessage).to.be.a('function')
    })
  })

})
