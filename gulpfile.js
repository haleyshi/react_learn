var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var BrowserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('copy', function() {
    gulp.src(['app/*.css'])
        .pipe(gulp.dest('./.tmp'));
    gulp.src(['bower_components/skeleton/css/*.css'])
        .pipe(gulp.dest('./.tmp'));
});

gulp.task('bundle', ['copy'], function() {
    return browserify({
            entries: 'app/main.jsx',
            debug: true,
        })
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./.tmp'));
});

gulp.task('live-server', function() {
    var server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('serve', ['bundle', 'live-server'], function() { // live-server task run before serve task
    BrowserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 9001
    });
});