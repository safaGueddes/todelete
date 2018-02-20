let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.browserSync({
    notify: false,
    files: ["./assets/dist/css/*.css", "./assets/dist/js/*.js", "./**/*.htm"]
});


mix.autoload({
    jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"],
    'popper.js': ['Popper']
});

mix.setPublicPath('assets')
    .js('assets/js/app.js', 'dist/js')
    .extract(['jquery', 'popper.js', 'bootstrap'])
    .sass('assets/sass/style.scss', 'dist/css')
    .options({
        processCssUrls: false
    })
    .sourceMaps()
    .webpackConfig({
        devtool: 'source-map'
    });
