var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('public/sass/**/*.s+(a|c)ss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/styles/'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('public/sass/**/*.s+(a|c)ss', ['sass']);
    return gulp.src('public/sass/**/*.s+(a|c)ss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});