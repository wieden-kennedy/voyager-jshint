var jshint = require('gulp-jshint');

module.exports = function (voyager) {

  voyager.task('jshint', ['scripts', 'prebuild'], function (done) {
    this.src([
        this.SRC + '/javascripts/**/*.js'
      , '!' + this.SRC + '/javascripts/vendor/**'
      ])
      .pipe(jshint())
      .on('end', done)
      .pipe(jshint.reporter('jshint-stylish'));
  });
};
