var path = require('path');
var webpack = require('webpack');
var PrerenderSpaPlugin = require('prerender-spa-plugin');


module.exports = function (helper) {
  return {
    devtool: '#source-map',
    // http://vue-loader.vuejs.org/en/workflow/production.html
    plugins: [
      new PrerenderSpaPlugin(
        // Absolute path to compiled SPA
        path.join(helper.PATHS.build),
        // List of routes to prerender
        ['/', '/vue-web-components', '/webcomponents-introduction', '/webcomponents-base', '/webcomponents-principles']
      ),
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