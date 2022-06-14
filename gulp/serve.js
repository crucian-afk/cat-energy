import gulp from "gulp";
import browser from "browser-sync";
import compilePug from "./compilePug.js";
import copyAssets from "./copyAssets.js";
import compileSass from "./compileSass.js";
import clean from "./clean.js";
import styles from "./styles.js";
import html from "./htmlmin.js";
import copyScripts from "./copyScripts.js";
import svg from "./svg.js";
import sprite from "./sprite.js";
import optimizeImages from "./optimizeImages.js";

function streamStyles() {
  return compileSass().pipe(browser.stream())
}

function initServer(done) {
  browser.init({
    server: {
      baseDir: "build",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

function reload(done) {
  browser.reload();
  done();
}

function watcher() {
  gulp.watch(
    ["source/pages/**/*.pug", "source/mock/data.json"],
    gulp.series(compilePug, html, reload)
  );
  gulp.watch("source/assets/**/*", gulp.series(copyAssets, reload));
  gulp.watch('source/sass/**/*.scss', streamStyles);
}

export const startProject = gulp.series(
  clean,
  compilePug,
  optimizeImages,
  copyAssets,
  gulp.parallel(
    styles,
    html,
    compileSass,
    copyScripts,
    svg,
    sprite
  )
)

export default gulp.series(startProject, initServer, watcher);
