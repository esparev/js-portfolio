const path = require("path");

// Webpack Configurations
module.exports = {
  entry: "./src/index.js", // App entry point
  output: {
    // Webpack build src
    path: path.resolve(__dirname, "dist"), // Finds the directory for the build of the project
    filename: "main.js", // Build filename
  },
  resolve: {
    extensions: [".js"], // File extensions for use
  },
  module: {
    rules: [
      {
        test: /\.m?js$/, // Will work with any .mjs and .js file
        exclude: /node_modules/, // It won't use anything from this folder
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
