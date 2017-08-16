const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "css/[name].css",
  disable: process.env.NODE_ENV === "development"
});



module.exports = function (helper) {
  return {
    entry: {
      'app': path.resolve(helper.PATHS.src, 'main.tsx')
    },
    output: {
      path: helper.PATHS.build,
      publicPath: '/',
      filename: 'js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          // exclude: /node_modules|vue\/src/,
          loader: 'ts-loader',
          // options: {
          //   appendTsSuffixTo: [/\.vue$/]
          // }
        },
        // {
        //   test: /\.vue$/,
        //   loader: 'vue-loader',
        //   options: {
        //     loaders: {
        //       ts: 'ts-loader',
        //       // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
        //       // the "scss" and "sass" values for the lang attribute to the right configs here.
        //       // other preprocessors should work out of the box, no loader config like this necessary.
        //       'scss': 'vue-style-loader!css-loader!sass-loader',
        //       'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
        //     },
        //     esModule: true,
        //     // other vue-loader options go here
        //   }
        // },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: '[folder]/[name].[ext]?[hash]'
          }
        },
        // {
        //   test: /\.(png|jpg|gif|svg|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        //   use: `file-loader?name=[folder]/[name].[ext]&publicPath=${publicPath}images/&outputPath=images/`,
        // },
        {
          test: /\.(eot|woff|woff2|ttf)(\?v=\d+\.\d+\.\d+)?$/,
          use: 'file-loader?name=[folder]/[name].[ext]',
        },
        {
          test: /\.scss$/,
          use: extractSass.extract({
            use: [{
              loader: "css-loader"
            }, {
              loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
          })
        },
        {
          test: /\.(html|htm)$/,
          loader: 'html-loader'
        },
      ]
    },
    resolve: {
      // alias: { 'vue$': 'vue/dist/vue.esm.js' },
      modules: [helper.PATHS.src, helper.PATHS.node_modules],
      extensions: ['.ts', '.js', '.json']
    },
    plugins: [
      extractSass
    ]
  }
}