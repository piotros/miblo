var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry  : './src/js/app.js',
    output : {
        path    : './www',
        filename: 'app.min.js'
    },
    module : {
        loaders: [
            {test: /\.vue$/, loader: 'vue'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject  : 'body',
            hash    : true,
            minify  : {
                removeComments    : true,
                collapseWhitespace: true
            }
        })
    ],
    vue    : {
        preLoaders: {
            js: 'babel-eslint'
        }
    }
};
