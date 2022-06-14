import gulp from 'gulp';
import svgo from 'gulp-svgmin';

export default function svg() {
  return gulp.src(['source/assets/img/*.svg', '!source/assets/img/icons/*.svg'])
    .pipe(svgo({
      removeViewBox: false
    }))
    .pipe(gulp.dest('build/img'));
}
