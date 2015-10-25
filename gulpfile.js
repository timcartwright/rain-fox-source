// vars for each module
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	concat = require('gulp-concat');

// Sources - can be multiple in each array
var coffeeSources = ['components/coffee/*.coffee'];
var jsSources = ['components/scripts/*.js'];
var sassSources = ['components/sass/main.scss']

// Tasks
gulp.task('coffee', function(){
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function() {
	gulp.src(jsSources)
	.pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
	gulp.src(sassSources)
	.pipe(compass({
		sass: 'components/sass',
		image: 'builds/development/image',
		style: 'expanded'
	})
		.on('error', gutil.log))
	.pipe(gulp.dest('builds/development/css'))
});

// Default runs when 'gulp' is called from terminal
gulp.task('default', ['coffee', 'js', 'compass']);