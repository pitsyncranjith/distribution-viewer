import path from 'path';
import webpack from 'webpack';

var environmentVariables = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
});

module.exports = {
  entry: './distributionviewer/core/static/js/app/app.js',
  output: {
    filename: './distributionviewer/core/static/js/bundle.js',
    sourceMapFilename: './distributionviewer/core/static/js/bundle.map'
  },
  devtool: '#source-map',
  plugins: [
    environmentVariables,
    /* TODO: Bring this back based on ENV.
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    }), */
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};
