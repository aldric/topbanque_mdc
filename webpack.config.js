const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: ['./src/app.js', './sass/style.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        port: 9000
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
      resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new ExtractTextPlugin({ // define where to save the file
            filename: '[name].bundle.css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            // Required
            filename: 'index.html',
            template: __dirname + '/template.html',
            mobile: true,
            lang: 'fr-FR',
            title: 'Maquette',
            // minify: {
            //     caseSensitive:true,
            //     collapseWhitespace:true
            // }
        }),
        // new UglifyJSPlugin({
        //     test: './src/.js($|?)/i',
        //     sourceMap: true
        // }),
        // new OptimizeCssAssetsPlugin({
        //     cssProcessor: require('cssnano'),
        //     cssProcessorOptions: {
        //         discardComments: {
        //             removeAll: true
        //         }
        //     },
        //     canPrint: true
        // })
    ]
};