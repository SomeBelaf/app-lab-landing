/*Подключения  модулея*/
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    ugligy = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    sprite = require('gulp-svg-sprite');


/*Удаление папки*/
gulp.task('clean', async function () {
    del.sync('dist')
})

/*Cлежение за html*/
gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

/*Перевод cscc в css*/
gulp.task('scss', function () {
    return gulp.src('app/scss/**/*.scss')       //поик файлов
        .pipe(sass({ outputStyle: 'expanded' })) //compressed
        .pipe(autoprefixer({
            browsers: ['last 8 versions']
        }))
        .pipe(rename({ suffix: '.min' }))         //минимизацыя
        .pipe(gulp.dest('app/css'))         //перенос файлов в папку
        .pipe(browserSync.reload({ stream: true }))
});

/*Сборка всех файлов css в один */
gulp.task('cssLibs', function () {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',         //поик файлов
        'node_modules/slick-carousel/slick/slick.css'
    ])
        .pipe(concat('_libs.scss'))         //конкатинация всех найдених файлов
        .pipe(gulp.dest('app/scss'))        //переном файла в папку
        .pipe(browserSync.reload({ stream: true }))
});

/*Cлежение за js*/
gulp.task('js', function () {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
});

/*Слежение, конкатинация файлов js в один файл */
gulp.task('jsLibs', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.min.js',
    ])
        .pipe(concat('libs.mim.js'))        //конкатинация всех найдених файлов 
        .pipe(ugligy())                 //минимизазия файлов
        .pipe(gulp.dest('app/js'))      //переном файла в папку
        .pipe(browserSync.reload({ stream: true }))
});

/*Browser-sync*/
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

/*Перенос файлов*/
gulp.task('export', async function () {
    let buildHtml = gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'));

    let buildCss = gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'));

    let buildJs = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'));

    let buildFonts = gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));

    let buildImg = gulp.src('app/images/**/*.*')
        .pipe(gulp.dest('dist/images'));
});

/*Watch*/
gulp.task('watch', function () {
    gulp.watch('app/**/*.html', gulp.parallel('html'))      //слежение за html
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss')) //слежение за scss
    gulp.watch('app/js/*.js', gulp.parallel('js'))   //слежение за js
});


/*Сборка папки dist*/
gulp.task('build', gulp.series('clean', 'export'))

gulp.task('default', gulp.parallel('cssLibs', 'scss', 'js', 'browser-sync', 'watch'))