var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nestedcss = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  	.pipe(postcss([cssImport, mixins, cssvars, nestedcss, hexrgba, autoprefixer]))

  	//if error log out error massage but please/emit continue
  	.on('error', function(errorInfo) {
  		console.log(errorInfo.toString());
  		this.emit('end');
  	})
  	.pipe(gulp.dest('./app/temp/styles'));

});