var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');

//import * as config from './config';
var config = {
	less: {
		watch: './styles/**/*.less',
		src: './styles/styles.less',
		dest: './styles/css'
	}
}
gulp.task('watcher', ['less'], function(){
    gulp.watch(config.less.watch, [less]);
});

gulp.task('less', function(){
    return gulp.src(config.less.src)
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest(config.less.dest))
});
