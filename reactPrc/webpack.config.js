const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // The bundled file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Transpile JS and JSX files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),  // Serve files from 'dist' directory
    compress: true,
    port: 9000,  // Development server will run on port 9000
  },
};