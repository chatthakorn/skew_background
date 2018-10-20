const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", () => {
  gulp
    .src("*.scss")
    .pipe(sass())
    .pipe(gulp.dest(f => f.base));
});

gulp.task("default", ["sass"], () => {
  gulp.watch("*.scss", ["sass"]);
});
