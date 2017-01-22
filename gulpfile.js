var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('pre-test', function() {
    return gulp.src(['core/**/*.js', 'lib/**/*.js'])
        .pipe(istanbul())
        .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function() {
    return gulp.src(['test/*.js'])
        .pipe(mocha({reporter: 'xunit-file'}))
        .pipe(istanbul.writeReports('coverage'))
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90}}));
});

gulp.task('default', ['test']);
