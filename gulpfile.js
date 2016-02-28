var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('compress', function() {
	return gulp.src('picture-background.js')
		.pipe(uglify())
		.pipe(concat('picture-background.min.js'))
		.pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('picture-background.js', ['compress']);
});

gulp.task('default', ['compress', 'watch']);
