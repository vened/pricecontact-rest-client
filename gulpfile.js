var requireDir = require('require-dir');
var dir = requireDir('./node_tasks');

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    runSequence = require('run-sequence'),
    conf = require('./node_tasks/config');


var _ENV_ = process.env.NODE_ENV || '';

console.info('----------------------------');
gutil.log(gutil.colors.green('node environment == ' + _ENV_));
var isWin = /^win/.test(process.platform);
console.log(isWin);
console.info('----------------------------');



/**
 * сборка в режиме разработки - gulp
 * или с сервером livereload NODE_ENV=DEV gulp
 */
gulp.task('default', function (callback) {
    runSequence(
        'styles',
        'concat-libs',
        'concat-components',
        'build-templates',
        'concat-app',
        'watch',
        callback);
});
