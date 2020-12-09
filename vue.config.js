const webpack = require('webpack');

module.exports = {
    // don't set absolute paths, otherwise reverse proxies with a custom path won't work
    publicPath: '',

    outputDir: 'build',

    pages: {
        index: {
            entry: 'src/index.js',
            template: 'src/index.html'
        }
    }
};