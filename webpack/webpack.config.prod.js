var path = require('path');
var webpack = require('webpack');



module.exports = function (helper) {
  return {
    devtool: '#source-map',
    // http://vue-loader.vuejs.org/en/workflow/production.html
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ]
  }
}