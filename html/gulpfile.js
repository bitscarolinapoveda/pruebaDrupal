const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',()=>
    gulp.src('./scss/*.scss')
        .pipe(sass({
            outputStyle: 'nested',
        }))
        .pipe(gulp.dest('./css')) 
);