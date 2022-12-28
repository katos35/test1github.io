import fileInclude from "gulp-file-include";

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(fileInclude())
		.pipe(app.gulp.dest(app.path.build.html))
}