import gulp from 'gulp';
import browser from 'browser-sync';

export default function scripts() {
  return gulp.src('source/assets/js/index.js')
    .pipe(gulp.dest('build/js'))
    .pipe(browser.stream());
};
