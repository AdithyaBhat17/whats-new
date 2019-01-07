const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')

// const env = dotenv.config().parsed;
  
//   // reduce it to a nice object, the same as before
// const envKeys = Object.keys(env).reduce((prev, next) => {
// prev[`process.env.${next}`] = JSON.stringify(env[next]);
// return prev;
// }, {});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new webpack.DefinePlugin(envKeys)
    ]
}