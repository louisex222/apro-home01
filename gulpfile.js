var gulp = require("gulp"),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify"),
    plumber = require("gulp-plumber"), // 處理例外用的
    connect = require("gulp-connect"),
    concat = require("gulp-concat"),
    order = require("gulp-order"),
    changed = require("gulp-changed"),
    image = require("gulp-image"),
    livereload = require("gulp-livereload"),
    extender = require("gulp-html-extend"),
    htmlmin = require("gulp-htmlmin"),
    sass = require("gulp-sass"),
    replace = require('gulp-replace');


var path_name = 'src/home01'

// 編譯sass
function style(done) {
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(
            sass({ outputStyle: "compressed" }) // compressed / nested / expanded
            .on("error", sass.logError)
        )
        //.pipe(replace('"../../images', '"../images'))
        .pipe(replace('../images/', "../img/"))
        .pipe(gulp.dest("dist/" + path_name + "/style"))

    done();
}

// 編譯 ES6

function js(done) {
    return gulp
        .src(["src/js/app/**/*.js"])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        //.pipe(plumber())
        //.pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/" + path_name + "/js"))

    done();
}

// js 資產
function vendorJs(done) {
    return gulp
        .src(["./src/js/vendor/**/*.js"])
        .pipe(order([
            "jquery.js",
            "swiper.js",
            "gsap.js",
            "scrolltrigger.js",
            "*.js"
        ]))
        .pipe(concat("vendor.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/" + path_name + "/js"))
    done();
}



// 壓縮圖片
function images(done) {
    return gulp
        .src(["src/images/**/*"])
        .pipe(changed('dist/images'))
        .pipe(
            image({
                zopflipng: true,
                jpegRecompress: false,
                jpegoptim: true,
                mozjpeg: true,
                gifsicle: true,
                svgo: false,
                concurrent: 5
            })
        )
        .pipe(gulp.dest("dist/" + path_name + '/img'))
    done();
}

// 整理HTML
var htmlOpts = {
    //caseSensitive: true,
    collapseWhitespace: false,
    //collapseInlineTagWhitespace: true,
    //preserveLineBreaks: true
    removeComments: true,
    removeEmptyAttributes: false,
    removeEmptyElements: false

};

function html(done) {
    return gulp
        .src(["src/**/*.html"])
        .pipe(extender({ annotations: true, verbose: false }))
        .pipe(htmlmin(htmlOpts))
        .pipe(replace('../images', path_name + '/img'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
    done();
}

function watchfiles() {
    gulp.watch("src/scss/**/*.scss", style);
    gulp.watch("src/js/app/**/*.js", js);
    gulp.watch("src/images/**/*", images);
    gulp.watch("src/js/vendor/**/*.js", vendorJs);
    gulp.watch("src/**/*.html", html);
    gulp.watch(["*.html"]).on("change", livereload.changed);

}


// export tasks

exports.style = style;
exports.js = js;
exports.vendorJs = vendorJs;
exports.images = images;
exports.html = html;
exports.watchfiles = watchfiles;

//exports.live = gulp.series(server, watch);

// define complex tasks
gulp.task("live", gulp.parallel(watchfiles));
gulp.task("build", gulp.parallel(style, js, images, vendorJs, html));