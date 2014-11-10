var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    nib = require('nib'),
    livereload = require('gulp-livereload'),
    conf = require('./config');

var _ENV_ = process.env.NODE_ENV || '';

var optStylBase = {
    use: [nib()],
    compress: true,
    define: { 'math-random': 123 }
};

var optStyl = {
    use: [nib()],
    compress: true,
    define: { 'math-random': 123 }
};

var styleBase = '../../../spa/styl/base.styl';


/* простой конкат  */
gulp.task('styl-components', function () {
    return gulp.src([
            conf.app + '/components/**/style.styl'
    ])
        .pipe(stylus(optStyl))
        .pipe(concat('components.css'))
        .pipe(gulp.dest(conf.build + '/css'))
        .pipe(gulpif(_ENV_ == 'DEV', livereload()))
});

gulp.task('styl-base', function () {
    return gulp.src([conf.app + '/styl/**/base.styl'])
        .pipe(stylus(optStyl))
        .pipe(concat('base.css'))
        .pipe(gulp.dest(conf.build + '/css'))
        .pipe(gulpif(_ENV_ == 'DEV', livereload()))
});


gulp.task('styles', [
    'styl-base',
    'styl-components'
]);
