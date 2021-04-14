let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js/').react()
  .sass('src/scss/app.scss', 'dist/css/')
  .setPublicPath('public');
