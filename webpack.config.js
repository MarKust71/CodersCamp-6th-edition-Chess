const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.js'],
        fallback: { path: require.resolve('path-browserify') },
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        contentBase: __dirname + '/public/',
        publicPath: '/',
    },
};
