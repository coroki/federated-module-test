const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    publicPath: "http://localhost:8082/",
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    port: 8082,
    static: "./dist",
    historyApiFallback: {
      index: "index.html",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "content",
      filename: "remoteEntry.js",
      exposes: {
        "./content.component": "./src/content/content.component",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
