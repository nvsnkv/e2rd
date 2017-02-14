var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: './src/bootstrapper.tsx',
    output: {
        filename: 'e2rd.js',
        path: __dirname + '/dist/',
        library: 'e2rd',
        libraryTarget: "var"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
               test:/\.(eot|woff2?|ttf)$/,
               use: ['file-loader']
            },
            {
                test: /\.(png|svg)$/,
                use: ['file-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({ inject: 'head', template: './src/demo.html' }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: { 
        inline: true,
        hot: true,
        contentBase: [ "src" ]
    },
    devtool: "source-map"
};