"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');

gulp.task('startGulping', function(){
	console.log("Started Gulp");
});

gulp.task('compile-sass', function(){
	gulp.src('./public/styles/style.scss')
	.pipe(sass())
	.pipe(gulp.dest('./public/styles/'))
});

gulp.task('watch-sass', function(){
	// First argument, an array of files to watch
	// Second argument, an array of tasks to run when we detect changes 
	gulp.watch(['./public/styles/style.scss'], ['compile-sass'])
});

gulp.task("minifyScripts", ["concatScripts"], function() {
	gulp.src("scripts/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('scripts'));
});

gulp.task('default', ['startGulping', 'compile-sass', 'watch-sass']);