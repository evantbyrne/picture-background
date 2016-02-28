var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('compress', function() {
	return gulp.src('jquery.picture-background.js')
		.pipe(uglify())
		.pipe(concat('jquery.picture-background.min.js'))
		.pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('jquery.picture-background.js', ['compress']);
});

gulp.task('default', ['compress', 'watch']);
