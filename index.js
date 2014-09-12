var voyager = require('voyager')
  , jshint = require('gulp-jshint')
  , vfs = require('vinyl-fs');

voyager.task('scripts-jshint', ['scripts', 'prebuild'], function (done) {
  vfs.src([
      this.SRC + '/javascripts/**/*.js'
    , '!' + this.SRC +'/javascripts/vendor/**'
    ])
    .pipe(jshint())
    .on('end', done)
    .pipe(jshint.reporter('jshint-stylish'));
});
