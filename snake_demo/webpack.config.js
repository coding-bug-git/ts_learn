/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    },
    extensions: ['.ts', '.js']
  },
  devServer: {
    port: 8888
    // host: '0.0.0.0'
  }
}
module.exports = config
