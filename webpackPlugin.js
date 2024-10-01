const webpack = require('webpack');

module.exports = function (_context, _options) {
  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack(_config, _isServer, _utils) {
      return {
        resolve: {
          // Various libraries required by Solana tooling
          fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "url": require.resolve("url/"),
            "https": require.resolve("https-browserify"),
            "http": require.resolve("stream-http"),
            "querystring": require.resolve("querystring-es3"),
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer/"),
            "vm": false,
          },
        },
        plugins: [
          new webpack.ProvidePlugin({
              Buffer: ['buffer', 'Buffer'],
          }),
        ]
      };
    },
  };
};
