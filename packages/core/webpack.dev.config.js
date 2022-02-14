const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// "react-hot-loader/patch",

module.exports = {
  mode: "development",
  entry: [
    "./src/index"
  ],
  output: {
    publicPath: "http://localhost:8080/",
    clean: true
  },
  devtool: "source-map",
  devServer: {
    port: 8080,
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
          loader: "babel-loader"
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "core",
      remotes: {
        "nav": "nav@http://localhost:8081/remoteEntry.js",
        "content": "content@http://localhost:8082/remoteEntry.js"
      },
      shared: ["react", "react-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ],
};