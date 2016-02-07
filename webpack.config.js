var config = {
    entry: "./src/websocket-driver.js",
    output: {
        filename: 'cycle-websocket-driver.js',
        path: __dirname + '/dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

module.exports = config;
