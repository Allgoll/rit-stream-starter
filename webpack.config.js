const path = require('path');

const common = {
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  }
}

const serverConfig = {
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  target: 'node',
  ...common,
};

const clientConfig = {
  entry: './src/client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'web',
  ...common,
};

module.exports = [
  serverConfig,
  clientConfig
]
