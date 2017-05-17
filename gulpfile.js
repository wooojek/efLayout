var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
    gulp.watch('sass/**/*.scss', ['scss']);
});