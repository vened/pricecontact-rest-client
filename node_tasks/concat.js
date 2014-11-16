var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var gulpif = require('gulp-if');
var conf = require('./config');
var livereload = require('gulp-livereload');

var _ENV_ = process.env.NODE_ENV || '';


/**
 * Сборка библиотек
 */
gulp.task('concat-libs', function () {
    return gulp.src([
            conf.bower + '/angular/angular.js',
            conf.bower + '/angular-resource/angular-resource.js',
            conf.bower + '/angular-ui-router/release/angular-ui-router.js',
            conf.bower + '/angular-ui-bootstrap/ui-bootstrap-0.11.2.js',
            conf.bower + '/angular-ui-bootstrap/ui-bootstrap-tpls-0.11.2.js'
    ])

        .pipe(concat('libs.js', {insertSourceName: {open: '/*', close: '*/'}}))
        .pipe(uglify({
            mangle: false,
            outSourceMap: true
        }))
        .pipe(gulp.dest(conf.build + '/js'));
});

/**
 * Сборка компонентов
 */
gulp.task('concat-components', function () {
    return gulp.src([
            conf.app + '/components/**/*.js'
    ])
        .pipe(concat('components.js', {insertSourceName: {open: '/*', close: '*/'}}))
        .pipe(gulp.dest(conf.build + '/js'))
        .pipe(gulpif(_ENV_ == 'DEV', livereload()));
});

/**
 * Сборка каркаса приложения
 */
gulp.task('concat-app', function () {
    return gulp.src([
            conf.app + '/app.js',
            conf.app + '/services/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(conf.build + '/js'))
        .pipe(gulpif(_ENV_ == 'DEV', livereload()));
});