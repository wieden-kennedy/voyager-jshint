var jshint = require('gulp-jshint');

module.exports = function (voyager) {

  voyager.task('read', 'jshint', function (done) {
    this.src(['javascripts/**/*.js', '!javascripts/vendor/*'])
      .pipe(jshint())
      .on('end', done)
      .pipe(jshint.reporter('jshint-stylish'));
  });

  voyager.watch(['javascripts/**/*.js', '!javascripts/vendor/*'], 'jshint');
};
