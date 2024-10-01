const webpack = require('webpack');

// eslint-disable-next-line
module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "url": require.resolve("url/"),
            "https": require.resolve("https-browserify"),
            "http": require.resolve("stream-http"),
            "querystring": require.resolve("querystring-es3"),
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer/"),
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