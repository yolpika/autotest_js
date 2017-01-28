var gulp = require('gulp');
var del = require('del');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');


gulp.task('js', function() {
    return gulp.src('../core/**/*.js')
                .pipe(gulp.dest('./build/core'))
});


gulp.task('lib', function() {
    return gulp.src('../lib/**/*.js')
                .pipe(gulp.dest('./build/lib'))
});


gulp.task('pre-test', ['js', 'lib'], function() {
    return gulp.src('./build/**/*.js')
                .pipe(istanbul())
                .pipe(istanbul.hookRequire());
});

gulp.task('default', ['pre-test'], function() {
    return gulp.src('./test*.js')
                .pipe(mocha({reporter: 'xunit-file'}))
                .pipe(istanbul.writeReports('coverage'))
                .pipe(istanbul.enforceThresholds({ thresholds: { global: 90}}))
});
