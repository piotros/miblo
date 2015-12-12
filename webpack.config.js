var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry  : './src/js/app.js',
    devtool: 'source-map',
    output : {
        path    : './www',
        filename: 'app.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
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
