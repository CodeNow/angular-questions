var directiveName = '' // #1

angular.module('myApp',[])
  .directive(directiveName, function (getGithubUser) {
    return {
      restrict: 'E',
      template: `
        <div>
          <!-- TODO: #2 Add username -->
          <h2>{{ UC.githubUsername }}</h2>
          <!-- TODO: #3 Add company name -->
          <!-- TODO: Add email-->
        </div>
      `,
      controllerAs: 'UC',
      controller: '',
      bindToController: true,
      scope: {
      }
    }
  })
  // TODO: #4 Handle users that don't exist
  // TODO: #5 Testing: How would you do it?
