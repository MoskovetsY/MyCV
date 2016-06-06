'use strict';

var gulp = require("gulp"),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// Запускаем локальный сервер
gulp.task('server', function () {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: 'app'
        }
    });
});

// слежка и запуск задач
gulp.task('watch', function () {
    gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css'
    ]).on('change', reload);
});

// Задача по-умолчанию
gulp.task('default', ['server', 'watch']);

// Более наглядный вывод ошибок
var log = function (error) {
    console.log([
        '',
        "----------ERROR MESSAGE START----------",
        ("[" + error.name + " in " + error.plugin + "]"),
        error.message,
        "----------ERROR MESSAGE END----------",
        ''
    ].join('\n'));
    this.end();
}
