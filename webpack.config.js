const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}
const plugins = [
    new HtmlWebpackPlugin({
        template: './resources/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
];
if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    entry: './resources/index.js',
    mode: mode,
    target: target,
    plugins: plugins,
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    devServer: {
        historyApiFallback: true,
        static: './dist',
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ]
    },
};