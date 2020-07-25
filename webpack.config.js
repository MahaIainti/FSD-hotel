const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isDev = process.env.NODE_ENV === 'development'
console.log('IS DEV', isDev)

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname,'src'),
    entry: {
        main: ['@babel/polyfill','./js/index.js'],
        analytics: './js/analytics.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        inline: true,
        //contentBase: './src',
        port: 3000,
        hot: isDev,
    },
    devtool: 'cheap-module-eval-source-map',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index-b.html',
        }),
        new HtmlWebpackPlugin({
            template: `./index.pug`,
            filename: './index.html',
            inject: true
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
              test: /\.pug$/,
              loader: 'pug-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options:{
                      presets: [
                        [
                          'babel-preset-env',
                          {
                            "useBuiltIns": "entry"
                          }
                        ]
                      ]
                    }
                }
            }
        ]
    },
};