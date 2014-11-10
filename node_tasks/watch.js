var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    conf = require('./config');

var _ENV_ = process.env.NODE_ENV;


gulp.task('watch', function () {

    gulp.watch([conf.app + '/**/*.styl',], ['styl-base'])
        .on('change', function (file) {

        });

    gulp.watch(conf.app + '/components/**/*.styl', ['styl-components'])
        .on('change', function (file) {

        });

    // components
    gulp.watch([
            conf.app + '/components/**/*.js',
    ], ['concat-components']);

    gulp.watch([
            conf.templ + '/**/*.html',
            conf.app + '/**/*.html'
    ], ['build-templates']);


    gulp.watch([
            conf.app + '/app.js',
            conf.app + '/app-states.js'
    ], ['concat-app'])
        .on('change', function (file) {

        });
});