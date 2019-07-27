const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash:4].js'
    },
    module: {
        rules: [
            { test: /\.hbs$/, loader: "handlebars-loader" },
            {
                test: /\.(png|jpe?g)/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "./assets/img/[name].[ext]",
                            limit: 10000
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        port: 8000
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/views/index.hbs",
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ]),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:4].css",
            chunkFilename: "[id].css"
        }),
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist']),
        new FriendlyErrorsWebpackPlugin()
    ]
};
