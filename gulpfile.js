// Импорт основного модуля

import gulp from "gulp";
// Импорт путей

import { path } from "./gulp/config/path.js";

//импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";



global.app = {
	//isBuild: process.argv.includes('--build'),
	//isDev: !process.argv.includes('--build'),
	//isWebP: !process.argv.includes('--nowebp'),
	//isFontsReW: process.argv.includes('--rewrite'),
	gulp: gulp,
	path: path,
	plugins: plugins
}
//импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";



// наблюдатель за изменениями в файле
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);
//построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, watcher);

//Выполнение сценария по умолчанию
gulp.task('default', dev);