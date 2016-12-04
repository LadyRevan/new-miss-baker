var gulp = require('gulp');
var sass = require('gulp-sass');
var filter = require('gulp-filter');
var browserSync = require('browser-sync');
var htmlmin = require('gulp-htmlmin');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');

gulp.task('default', function() {
  console.log("This is gulp!");
});

gulp.task('sass', function() {
    var f = filter(['scss\\**\\*.scss', '!**\\*utility.*']);

    console.log("in task 'sass'");

    return gulp.src('scss\\**\\*.scss')
        .pipe(f)
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('dist\\styles'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browser-sync'], () => {
    gulp.watch('*.js', ['minify-javascript']);
    gulp.watch('scss\\**\\*.scss', ['sass']);
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('minify-javascript', () => {
    return gulp.src('*.js')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
        stream: true
    }));
});