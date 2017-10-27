const path = require('path');

const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    entry: ['babel-polyfill', 'app/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    devtool: '#cheap-module-source-map',
    module: {
        rules: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env'],
                    plugins: ['babel-plugin-transform-object-rest-spread', 'transform-class-properties'],
                },
            },
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'resolve-url-loader', 'less-loader'],
            }),
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'resolve-url-loader'],
            }),
        },
        {
            test: /\.(gif|png|jpe?g|svg|ico)$/,
            use: [{
                loader: 'file-loader',
                query: {
                    name: '/static/images/[name].[ext]',
                },
            }],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{
                loader: 'url-loader',
                query: {
                    name: '/static/fonts/[name].[ext]',
                },
            }],
        },
        ],
    },
    devServer: {
        contentBase: './public',
        hot: true,
        port: 7777,
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/style.css',
            allChunks: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Football-app',
            filename: 'index.html',
        }),
    ],
};

module.exports = webpackConfig;
