// Following the instructions on DWF blog to update Docusaurus webpack config
// https://dwf.dev/blog/2022/11/12/2022/updating-docusaurus-webpack-config/
module.exports = function () {
  return {
    name: "my-loaders",
    configureWebpack() {
      return {
        resolve: {
          fallback: {
            crypto: false,
            stream: false,
            assert: false,
            http: false,
            https: false,
            zlib: false,
            url: false,
            buffer: false,
            process: false,
          },
        },
      };
    },
  };
}
