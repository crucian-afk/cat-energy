import gulp from "gulp";
import rename from "gulp-rename"
import svgo from "gulp-svgmin";
import svgstore from "gulp-svgstore"

export default function sprite() {
  return gulp.src('source/assets/img/icons/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
}
