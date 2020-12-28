const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
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
        publicPath: '/',
    },
};
