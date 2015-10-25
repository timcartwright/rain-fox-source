// vars for each module
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat');

// Sources - can be multiple in each array
var coffeeSources = ['components/coffee/*.coffee'];
var jsSources = ['components/scripts/*.js'];
var sassSources = ['components/sass/main.scss'];
var htmlSources = ['builds/development/*.html'];
var jsonSources = ['builds/development/js/*.json'];

//// Tasks

// Coffee
gulp.task('coffee', function(){
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});

// jS
gulp.task('js', function() {
	gulp.src(jsSources)
	.pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('builds/development/js'))
	.pipe(connect.reload()) // Server reload
});

// Sass / Compass
gulp.task('compass', function() {
	gulp.src(sassSources)
	.pipe(compass({
		sass: 'components/sass',
		image: 'builds/development/image',
		style: 'expanded'
	})
		.on('error', gutil.log))
	.pipe(gulp.dest('builds/development/css'))
	.pipe(connect.reload()) // Server reload
});

// HTML
gulp.task('html', function() {
	gulp.src(htmlSources)
		.pipe(connect.reload()) // Server reload
});

// json
gulp.task('json', function() {
	gulp.src(jsonSources)
		.pipe(connect.reload()) // Server reload
});

// Watch for changes
gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['compass']);
	gulp.watch(htmlSources, ['html']);
	gulp.watch(jsonSources, ['json']);
});

// Start server with live reload
gulp.task('connect', function() {
	connect.server({
		root: 'builds/development/',
		livereload: true
	});
});

// Default: runs when 'gulp' is called from terminal
gulp.task('default', ['html','coffee', 'js', 'compass', 'json', 'connect', 'watch']);