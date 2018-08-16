const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'inline-source-map',

    entry: {
        index: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: "/",
        filename: 'js/[name].js'
    },

    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin({ //压缩代码
        //     compress: {
        //         warnings: false
        //     },
        //     except: ['$super', '$', 'exports', 'require'] //排除关键字
        // }),

        new ExtractTextPlugin('css/[name].css')
    ],

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })
        },{
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'url-loader?limit=10000&name=img/[name]_[hash:4].[ext]'
        }, {
            test: /\.(woff|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: 'images/fonts/[name].[hash:4].[ext]'
            }
        }]
    }
};
