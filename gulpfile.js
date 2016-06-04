// include the required packages.
var gulp   = require('gulp'),
    data   = require('gulp-data'),
    stylus = require('gulp-stylus');

gulp.task('stylus', function() {
  return gulp.src('./examples/stylus/*.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('./examples/css'));
});