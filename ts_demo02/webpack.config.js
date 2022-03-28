/** @type {import('webpack').Configuration} */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    // environment: {
    //   arrowFunction: false
    // }
  },
  resolve: {
    extensions: ['ts', 'tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.*tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    allowedHosts: 'all',
    client: {
      progress: true
    },
    compress: false, // 不启用压缩
    // host: '0.0.0.0',
    port: 8089
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}
