import gulp from 'gulp';
import squoosh from "gulp-libsquoosh";

export default function optimizeImages() {
  return gulp.src('source/assets/img/**/*.{png,jpg}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'))
}
