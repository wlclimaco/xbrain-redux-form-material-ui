const path = require('path');
const webpack = require('webpack');

const config = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'xbrain-redux-form-material-ui.min.js',
    libraryTarget: 'umd',
    library: 'XbrainReduxFormMaterialUi',
  },
  externals: {
    'material-ui': 'material-ui',
    'prop-types': 'prop-types',
    'xbrain-react-components': 'xbrain-react-components',
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({ output: { comments: false } })],
};

module.exports = config;
