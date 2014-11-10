var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    templateCache = require('gulp-angular-templatecache'),
    gulpif = require('gulp-if'),
    cleanhtml = require('gulp-cleanhtml'),
    livereload = require('gulp-livereload'),
    conf = require('./config');

var _ENV_ = process.env.NODE_ENV;

gulp.task('build-templates', function () {
    return gulp.src([
        conf.app + '/**/*.html'
    ])
        .pipe(cleanhtml())
        .pipe(templateCache({
            module: 'appTemplates'
        }))
        .pipe(uglify({
            mangle: false,
            output: {
                beautify: true
            }
        }))
        .pipe(gulp.dest(conf.build+'/js'))
        .pipe(gulpif(_ENV_ == 'DEV', livereload()))
});
