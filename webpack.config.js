const path = require('path');

const config = {
  mode: 'production',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'xbrain-redux-form-material-ui.min.js',
    libraryTarget: 'umd',
    library: 'XbrainReduxFormMaterialUi',
  },
  externals: [
    {
      'prop-types': 'prop-types',
      'react-dom': 'react-dom',
      'xbrain-react-components': 'xbrain-react-components',
      react: 'react',
    },
    /^@material-ui\/.+$/,
  ],
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
  optimization: {
    minimize: true,
  },
};

module.exports = config;
