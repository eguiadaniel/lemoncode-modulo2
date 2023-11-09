import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: ['./src/ejercicios.js', './src/styles.css'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      scriptLoading: 'blocking',
      hash: true
    })
  ]
};
