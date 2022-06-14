import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin'

export default function html() {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}
