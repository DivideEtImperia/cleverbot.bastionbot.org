const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const del = require('del');

gulp.task('clean', () => {
  // Clean `build` directory
  return del([ 'build/*' ]);
});

gulp.task('compile', () => {
  // Compine TypeScript
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('build'));
});
