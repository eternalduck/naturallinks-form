const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const plumber = require("gulp-plumber");
const changed = require("gulp-changed");
const notify = require("gulp-notify");
// const babel = require("gulp-babel");
// const concat = require("gulp-concat");
const browsersync = require("browser-sync");

let path = {
	src: {
		html: "./src/*.html",
		css: "./src/scss/**/*.scss",
		js: "./src/js/*.js",
		img: "./src/img/**"
	},
	build: {
		html: "./build/",
		css: "./build/css/",
		js: "./build/js/",
		img: "./build/img/"
	}
};

function html() {
	return gulp
		.src(path.src.html)
		.pipe(plumber())
		.pipe(gulp.dest(path.build.html))
		.pipe(browsersync.stream())
		.pipe(notify({ message: 'Processed <%= file.relative %>' }))
};

function css() {
	return gulp
	.src(path.src.css)
	.pipe(sass({ outputStyle: "expanded" }))
	.pipe(postcss([
		autoprefixer({
			grid: "autoplace"
		}),
	]))
	.pipe(gulp.dest(path.build.css))
	.pipe(browsersync.stream())
}

function js() {
	return gulp
	.src(path.src.js)
	// .pipe(babel({
	// 	presets: ["@babel/env"]
	// }))
	.pipe(gulp.dest(path.build.js))
	.pipe(browsersync.stream())
}

function img() {
	return gulp
		.src(path.src.img)
		.pipe(changed(path.build.img))
		.pipe(gulp.dest(path.build.img))
		.pipe(notify({ message: 'Processed <%= file.relative %>' }))
};

function serve(done) {
	browsersync.init({
		server: {
			baseDir: './build/'
		},
		host: 'localhost',
		port: 6600,
		open: false,
	});
	gulp.watch(path.src.html, html).on('change', browsersync.reload)
	gulp.watch(path.src.css, css)
	gulp.watch(path.src.js, js).on('change', browsersync.reload)
	gulp.watch(path.src.img, img).on('change', browsersync.reload)
	done();
}

const build = gulp.series(html, css, js, img);
const buildAndStart = gulp.series(html, css, js, img, serve);

exports.build = build;
exports.default = buildAndStart;
