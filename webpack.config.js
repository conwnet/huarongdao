const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle-[hash].js'
    },
    devtool: 'eval-source-map',
    devServer: {
        open: true,
        host: '0.0.0.0'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: { presets: [ 'es2015' ] }
            },
            exclude: /node_modules/,
            
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: __dirname + '/index.html' }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}
