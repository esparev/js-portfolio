const path = require("path");

// Configurations
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
};
