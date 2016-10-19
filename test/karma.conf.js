module.exports = function (config) {
  var conf = {
    basePath: '../',
    frameworks: ['jspm', 'mocha', 'chai'],
    reporters: ['mocha'],
    browsers: ['Chrome'],
    autoWatch: true,

    // these are default values anyway
    singleRun: true,
    colors: true,
    files : [
      './test/**/*.js',
      './node_modules/**/*.js'
    ]
  }
  config.set(conf)
}
