module.exports = function (config) {
  var conf = {
    basePath: '../',
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],
    browsers: ['Chrome'],
    autoWatch: true,

    // these are default values anyway
    singleRun: true,
    colors: true,
    files : [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './exercise-1/index.js',
      // './exercise-2/index.js',
      // './exercise-3/index.js',
      // './exercise-4/index.js',
      './test/**/*.js'
    ]
  }
  config.set(conf)
}
