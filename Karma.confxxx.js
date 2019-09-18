// Karma configuration
// Generated on Thu Sep 12 2019 11:49:14 GMT+0800 (GMT+08:00)
var webpack = require('webpack');
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/should/should.js',
      'src/view/b.js',
      'src/view/quz.js',
      'test/b.spec.js',
      'test/**/*.js',
      'test/**/*.ts',
      'test/**/*.spec.ts'
      // { pattern: 'You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".', included: false }
    ],


    // list of files / patterns to exclude
    exclude: [
    ],

    // 必须
    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-spec-reporter'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/*.spec.ts': ['webpack'],
      'test/**/*.ts': ['webpack']
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "babel-loader"
              }
            ]
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader'
          }
        ]
      },
      resolve: {
        extensions: ['.ts']
      }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
