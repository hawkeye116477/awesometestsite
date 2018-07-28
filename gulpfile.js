var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify-html', () => {
    return gulp.src('public/**/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        useShortDoctype: true,
      }))
      .pipe(gulp.dest('./public'));
  });