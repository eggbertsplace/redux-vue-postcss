var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ['babel'],
        exclude: [/node_modules/]
      },
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loaders: ['url']
      // }
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 50,
          name: 'images/[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  vue: {
    postcss:[
      require('precss'),
      require('rucksack-css')({
        autoprefixer: {
            browsers: ['last 2 versions', 'ie > 8'],
            fallbacks: true
        }
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: './index.html',
        title: 'Cash Shop',
        template: __dirname + '/index.html'
    })
  ],
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
