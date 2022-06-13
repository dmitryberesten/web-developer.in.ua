import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import csso from 'postcss-csso';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import rename from 'gulp-rename';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import spriting from 'gulp-svgstore';
import del from 'del';

// Styles
export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// HTML
const htmlmini = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
}

//JS
const scripts = () => {
  return gulp.src('source/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('build/js'));
}

// Pics
const images = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'));
}

// Webp
const webper = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(squoosh({ webp: {} }))
    .pipe(gulp.dest('source/img'))
    .pipe(gulp.dest('build/img'));
}

// SVG
const svger = () => {
  return gulp.src(['source/img/**/*.svg', '!source/img/sprites/*.svg'])
    .pipe(svgo())
    .pipe(gulp.dest('build/img'));
}

//
const spriter = () => {
  return gulp.src(['source/img/sprites/*.svg'])
    .pipe(spriting())
    .pipe(rename('shopcart.svg'))
    .pipe(gulp.dest('build/img/sprites'));
}

// Copier
const copy = (done) => {
  gulp.src([
    'source/fonts/*.{woff2,woff}',
    'source/*.ico',
    'source/*.webmanifest',
  ], {
    base: 'source'
  })
  .pipe(gulp.dest('build'))
  done();
}

// Clean
const clean = () => {
  return del ('build');
}

// Server
const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher
const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}

// Building
export const build = gulp.series(
  clean,
  copy,
  scripts,
  images,
  webper,
  svger,
  spriter,
  styles,
  htmlmini
);


export default gulp.series(
  clean,
  copy,
  scripts,
  images,
  webper,
  svger,
  spriter,
  styles,
  htmlmini,
  server,
  watcher
);
