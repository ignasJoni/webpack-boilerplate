const path = require("path");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src", "script.js"),
  // output: {
  //   path: path.join(__dirname, "dist"),
  //   filename: "library_name.bundle.js",
  //   libraryTarget: "var",
  //   library: "LibraryName",
  // },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
