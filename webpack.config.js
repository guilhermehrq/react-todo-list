const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 50000,
        contentBase: './dist',
        disableHostCheck: true
    },
    devtool: 'source-map',
    resolve: {
        enforceExtension: false,
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js[x]$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff2|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [htmlPlugin]
};