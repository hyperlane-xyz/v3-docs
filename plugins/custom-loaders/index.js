import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

module.exports = function (context, options) {
  return {
    name: "custom-loaders",
    configureWebpack(config, isServer) {
      return {
        plugins: [
          new NodePolyfillPlugin(),
        ],
      };
    },
  };
};
