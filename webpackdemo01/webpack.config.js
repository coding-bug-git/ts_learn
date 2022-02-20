/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
  entry: './src/main.ts',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   presets: [
            //     [
            //       '@babel/preset-env',
            //       {
            //         targets: {
            //           chrome: '88',
            //           ie: '11',
            //         },
            //         corejs: '3',
            //         useBuiltIns: 'usage',
            //       },
            //     ],
            //   ],
            // },
          },
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
    extensions: ['.ts', '.js'],
  },
}
module.exports = config
