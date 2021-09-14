const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './example/index.js'),
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
    },
    devServer: { port: 3000 },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(gif|jpg|jpeg|mp3|mp4|xlsx|docx|pdf|csv)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './example/index.html'),
        }),
    ],
}
