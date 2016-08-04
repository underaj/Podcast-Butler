module.exports = {
  entry: __dirname + "/client/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "node_modules, dist"
      }
    ]
  },
  devServer: {
    contentBase: "./client",
    colors: true,
    historyApiFallback: true,
    inline: true
  }  
};
