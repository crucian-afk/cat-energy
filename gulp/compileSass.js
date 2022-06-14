import gulp from "gulp";

import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";

import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

export default function compileSass() {
  return gulp
    .src("source/sass/*.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("build/css", { sourcemaps: "." }));
}
