let mix = require('laravel-mix');

mix.sass('src/scss/app.scss', 'dist/css/')
  .js('src/js/app.js', 'dist/js/').react()
  .setPublicPath('public');
