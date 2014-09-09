var voyager = require('voyager')
  , jshint = require('gulp-jshint')
  , vfs = require('vinyl-fs')
  , CWD = process.cwd();

voyager.task('jshint', function (done) {
  vfs.src([
      CWD + '/src/javascripts/**/*.js'
    , '!'+ CWD +'/src/javascripts/vendor/**'
    ])
    .pipe(jshint())
    .on('end', done)
    .pipe(jshint.reporter('jshint-stylish'));
});
