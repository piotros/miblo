var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry  : './src/js/app.js',
    output : {
        path    : './www',
        filename: 'app.min.js'
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
    ]
};
