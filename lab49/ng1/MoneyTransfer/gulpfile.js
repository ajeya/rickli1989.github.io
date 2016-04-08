var gulp = require('gulp');
var gulpHelpers = require('gulp-helpers');
var taskMaker = gulpHelpers.taskMaker(gulp);
var situation = gulpHelpers.situation();
var _ = gulpHelpers.framework('_');
var runSequence = gulpHelpers.framework('run-sequence');

var path = {
	source: 'src/**/*.js',
	coffee: 'src/**/*.coffee',
	e2e: 'test-e2e/**/*.js',
	e2eOutput: 'test-e2e-compile/',
	html: '**/*.html',
	templates: ['src/**/*.tpl.html', '!src/index.tpl.html'],
	less: ['src/**/*.less', '!src/assets/**/*.less'],
	output: 'dist/',
	outputLess: 'src/app/stylesheets',
	indexHtmlOutput: 'dist/index.html',
	minify: 'dist/**/*.js',
	assets: ['./src/**/*.css', './src/**/*.svg', './src/**/*.woff', './src/**/*.ttf', './src/**/*.png', './src/**/*.ico', './src/**/*.gif', './src/**/*.jpg', './src/**/*.eot'],
	json: './src/**/*.json',
	index: './src/index.tpl.html',
	watch: './src/**',
	karmaConfig: __dirname + '/karma.conf.js',
	systemConfig: './system.config.js'
};

var serverOptions = {
	open: false,
	ui: false,
	notify: false,
	ghostMode: false,
	port: process.env.PORT || 9000,
	server: {
		baseDir: [path.output],
		routes: {
			'/system.config.js': './system.config.js',
			'/jspm_packages': './jspm_packages'
		}
	}
};

if (situation.isProduction()) {
	serverOptions = _.merge(serverOptions, {
		codeSync: false,
		reloadOnRestart: false
	});
}

var cacheBustConfig = {
	usePrefix: false,
	patterns: [
		{
			match: '<!-- PROD',
			replacement: ''
		}, {
			match: 'END -->',
			replacement: ''
		}, {
			match: '{{hash}}',
			replacement: Math.round(new Date() / 1000)
		}
	]
};

var babelCompilerOptions = {
	modules: 'system'
};

taskMaker.defineTask('clean', {taskName: 'clean', src: path.output, taskDeps: ['clean-e2e']});
taskMaker.defineTask('clean', {taskName: 'clean-e2e', src: path.e2eOutput});
taskMaker.defineTask('less', {taskName: 'less', src: path.less, dest: path.outputLess});
taskMaker.defineTask('babel', {taskName: 'babel', src: [path.source], dest: path.output, ngAnnotate: true, compilerOptions: babelCompilerOptions});
taskMaker.defineTask('ngHtml2Js', {taskName: 'html', src: path.templates, dest: path.output, compilerOptions: babelCompilerOptions});
taskMaker.defineTask('copy', {taskName: 'systemConfig', src: path.systemConfig, dest: path.output});
taskMaker.defineTask('copy', {taskName: 'assets', src: path.assets, dest: path.output});
taskMaker.defineTask('copy', {taskName: 'json', src: path.json, dest: path.output, changed: {extension: '.json'}});
taskMaker.defineTask('copy', {taskName: 'index.html', src: path.index, dest: path.output, rename: 'index.html'});
taskMaker.defineTask('copy', {taskName: 'cache-bust-index.html', src: path.index, dest: path.output, rename: 'index.html', replace: cacheBustConfig});
taskMaker.defineTask('htmlMinify', {taskName: 'htmlMinify-index.html', taskDeps: ['cache-bust-index.html'], src: path.indexHtmlOutput, dest: path.output});
taskMaker.defineTask('watch', {taskName: 'watch', src: path.watch, tasks: ['compile', 'index.html', 'lint']});
taskMaker.defineTask('minify', {taskName: 'minify', src: path.minify, dest: path.output});
taskMaker.defineTask('jshint', {taskName: 'lint', src: path.source});
taskMaker.defineTask('karma', {taskName: 'karma', configFile: path.karmaConfig});
taskMaker.defineTask('browserSync', {taskName: 'serve', config: serverOptions, historyApiFallback: true});


gulp.task('compile', function(callback) {
	return runSequence(['less', 'html', 'babel', 'json', 'assets'], callback);
});

gulp.task('recompile', function(callback) {
	return runSequence('clean', ['compile'], callback);
});

gulp.task('test', function(callback) {
	return runSequence('recompile', 'karma', callback);
});

gulp.task('run', function(callback) {
	if (situation.isProduction()) {
		return runSequence('recompile', 'cache-bust-index.html', 'htmlMinify-index.html', 'minify', 'serve', callback);
	} else if (situation.isDevelopment()) {
	  return runSequence('recompile', 'lint', 'index.html', 'serve', 'watch', callback);
	}
});

gulp.task('default', ['run']);
