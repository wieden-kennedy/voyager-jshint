var voyager = require('voyager')
  , jshint = require('gulp-jshint');

voyager.task('jshint', function (done) {
  this.src([
      this.SRC + '/javascripts/**/*.js'
    , '!' + this.SRC + '/javascripts/vendor/**'
    ])
    .pipe(jshint())
    .on('end', done)
    .pipe(jshint.reporter('jshint-stylish'));
});
