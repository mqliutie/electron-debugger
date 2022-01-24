
const path = require("path");

module.exports = {
  mode: "development",
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  entry: {
    index: path.join(__dirname, "renderer.js"),
  },

  output: {
    path: path.join(__dirname,'dist'),
    filename: '[name].js',
  },
};
