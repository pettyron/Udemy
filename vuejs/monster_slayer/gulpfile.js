const gulp = require('gulp'),
      notify = require('gulp-notify'),
      bs = require('browser-sync').create();

const reload = bs.reload();

gulp.task('scripts', function () {
    return gulp.src('scripts/*.js')
        .pipe(notify({message: 'Gulp task complete'}));
});
gulp.task('styles', function () {
  return gulp.src('css/*.css');
});

gulp.task('serve:files', ['scripts', 'styles'], function (gulpCallBack) {
    bs.init({
      browser: 'chrome.exe',
      server: {
        baseDir: './',
        directory: true
      },
      cors: true,
      startPath: '/index.html',
      injectChanges: true,
      notify: false
    }, function callback() {
      gulp.watch(['*.html', 'scripts/*.js'], bs.reload);
      gulp.watch('css/*.css', function () {
        gulp.src('css/*.css')
          .pipe(bs.stream());
      });
      gulpCallBack();
    });
  });

  gulp.task('watch', function () {
      gulp.watch('scripts/*.js', ['scripts']);
      gulp.watch('css/*.css', ['styles']);
  });

  // Default task
  gulp.task('default', ['watch', 'serve:files']);
