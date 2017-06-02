import path from 'path'
import webpack from 'webpack'
// import project from './app/config/project.config'
import { dependencies as externals } from './app/package.json'


export default {
  externals: Object.keys(externals || {}),

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    }]
  },

  output: {
    path: path.resolve('./app'),
    filename: 'bundle.js',
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.resolve('./app'),
      'node_modules'
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
}
