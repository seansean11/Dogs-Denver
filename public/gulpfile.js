/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache --save-dev
 */

// Set Paths
var path = {
  images: 'assets/img',
  scripts: 'assets/js',
  sass: 'assets/scss'
};

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');

// Styles
gulp.task('styles', function() {
  return gulp.src(path.sass + '/style.scss')
    .pipe(sass({ style: 'expanded', }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Plugins
gulp.task('plugins', function() {
  return gulp.src(path.scripts + '/plugins.js')
    .pipe(concat('plugins.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(path.scripts))
    .pipe(notify({ message: 'Plugins task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(path.scripts + '/main.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(path.scripts))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src(path.images + '/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(path.images))
    .pipe(notify({ message: 'Images task complete' }));
});

// Default task
gulp.task('default', function() {
    gulp.start('styles', 'plugins', 'scripts', 'images');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(path.sass + '/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch(path.plugins + '/plugins.js', ['scripts']);

  // Watch .js files
  gulp.watch(path.scripts + '/main.js', ['scripts']);

  // Watch image files
  gulp.watch(path.images + '/**/*', ['images']);

  // Create LiveReload server
  livereload.listen();

});