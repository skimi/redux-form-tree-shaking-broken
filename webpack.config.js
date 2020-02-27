const webpack = require("webpack");

module.exports = () => {
  return {
    entry: {
      index: ["./index.js"]
    },
    output: {
      publicPath: 'dist',
    },
    mode: "production",
    optimization: {
      minimize: false,
    },
  };
};
