var gulp = require('gulp');
var jsonlint = require("gulp-jsonlint");

gulp.task('test', function () {
  gulp.src("./*.json")
      .pipe(jsonlint())
      .pipe(jsonlint.reporter());
});
