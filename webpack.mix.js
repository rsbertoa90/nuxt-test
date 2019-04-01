let mix = require('laravel-mix');
let webpack = require('webpack');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    plugins: [
        // ...
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    // list of additional plugins
});


// Override mix internal webpack output configuration
mix.config.webpackConfig.output = {
    chunkFilename: 'js/[name].bundle.js',
    publicPath: '/',
};



mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['vue', 'bootstrap', 'vue-mq', 'moment', 'v-lazy-image', 'vuex'])
   .sass('resources/assets/sass/app.scss', 'public/css') 
   ;

if (mix.inProduction()) {
    mix.version().purgeCss();
   
}
/* if (mix.inProduction()) {
    mix.babel('public/js/app.js', 'public/js/app.js').version();
} */