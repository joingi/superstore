var gulp = require('gulp');
var watch = require('watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    // Open the site in Chrome
    browser: "google chrome",
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  gulp.watch('./app/index.html', function() {
    browserSync.reload();
  });

    gulp.watch('./app/assets/styles/**/*.css', function() {
  	gulp.start('cssInject');
    browserSync.reload();
  });

});

gulp.task('cssInject', ['styles'], function() {
   return gulp.src('/app/temp/styles/styles.css')
    .pipe(browserSync.stream());

});

