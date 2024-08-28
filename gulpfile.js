const { src } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Compilando o sass, adicionando autoprefixer e dando refresh na página
function compilaSass() {
  return gulp
    .src('scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(concat('style.css'))
    .pipe(gulp.dest('styles/'))
    .pipe(browserSync.stream());
}

// Tarefa do sass
gulp.task('sass', compilaSass);

// Concatenando os plugins CSS em um arquivo plugin.css
function pluginsCSS() {
  return gulp
    .src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

gulp.task('plugincss', pluginsCSS);

// Função do browserSync
function browser() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
}

// Tarefa do browserSync
gulp.task('browser-sync', browser);

// Função do watch para alterações no SCSS e HTML
function watch() {
  gulp.watch('scss/*.scss', compilaSass);
  gulp.watch('css/lib/*.css', pluginsCSS);
  gulp.watch('*.html').on('change', browserSync.reload);
}

// Tarefa Watch
gulp.task('watch', watch);

// Tarefa default que executa o watch e o browserSync
gulp.task(
  'default',
  gulp.parallel('watch', 'browser-sync', 'sass', 'plugincss'),
);
