import gulp from "gulp";

export default function copyImages(done) {
  gulp
    .src("source/assets/img/**/*")
    .pipe(gulp.dest("build/img"));

  done();
}
