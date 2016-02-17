var webpack           = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path              = require('path')

module.exports = {

    entry: './src/app.js',

    output: {
        path    : './www',
        filename: 'app.min.js'
    },

    module: {
        loaders: [{
            test  : /\.vue$/,
            loader: 'vue'
        }, {
            test   : /\.js$/,
            exclude: /node_modules/,
            loader : 'babel!eslint'
        }, {
            test  : /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test  : /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test  : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
            test  : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        }, {
            test  : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        }]
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
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ],

    vue: {
        loaders: {
            js: 'babel!eslint'
        }
    },

    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },

    resolve: {
        root      : [path.resolve(__dirname, 'src')],
        extensions: ['', '.vue', '.js']
    },

    sassLoader: {
        includePaths: [path.resolve(__dirname, 'src')]
    }

}
