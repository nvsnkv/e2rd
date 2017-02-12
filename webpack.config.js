var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: './src/app.tsx',
        output: {
        filename: 'e2rd.js',
        path: __dirname + '/dist/'
    },
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({ title: 'e2rd demo' }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: { 
        inline: true,
        hot: true,
        contentBase: [ "src" ]
    },
    devtool: "source-map"
};