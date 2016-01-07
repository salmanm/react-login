const gulp = require('gulp');

import shell from 'gulp-shell';

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Serve just uses the webpack dev server with pretty much the default settings.
gulp.task('serve', shell.task([
  'CLIENT_HOST=browser ./node_modules/.bin/webpack-dev-server --hot --inline --colors --content-base src/ --port 9999']
));
