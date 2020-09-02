Для создания проекта нужно открыть консоль в нужной папке и ввести в консоль npm init.
Заполнить все нужние строки.
Установить gulp, еслион не стоит глобально.(npm i gulp-cli --global)
Установить gulp локально. (npm i gulp)
Если есть файл package.json с всеми нужными пакетами вести в консоль npm i, и оно становит все нужние пакетами.
Если нет  файл package.json, ввести (npm i gulp gulp-sass browser-sync gulp-uglify gulp-concat gulp-rename del gulp-autoprefixer --save-dev)
                                    (npm i normalize.css slick-carousel --save)
 

Парка fonts для файлов с кастомными шрифтами.
В папке scss создать папку section с файлами для стилей частей страници.

Символ "_" дл ятого чтобы gulp не обрибатывал ети файлы.

_fonts.scss - для подключения кастомных шрифтов.
_global.scss - для стилей которые задействованный на всей странице.
_libs.scss - подключаемые библиотеки стилей.
_media.scss - для медиа запросов. (медиа запросы пишу в том же месте где и стили секции)
_variables.scss - переменние.
main.scss - все и так понятно.

Для запуска(live-server, watch) вести в консоль gulp.

Для создания папки dist ввести gulp build.

Для подключения BOOTSTRAP       <link rel="stylesheet" href="css/bootstrap-grid.min.css">
                                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> (а конец страници)

Для подключения FONTAWESOME     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">