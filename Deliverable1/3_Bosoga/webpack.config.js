const path = require("path");
module.exports = {

    entry:"./frontend/src/index.js",

    mode:"development",

    
    module:{
        rules: [
            {
              test: /\.node$/,
              use: 'ignore-loader'  // or 'file-loader' if you need the file
            },
            {
              test: /\.d\.ts$/,
              use: 'ignore-loader'
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
            }, {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader',
                'postcss-loader', 
              ],
            },
        ],
    },
    resolve: {
        fallback: {
           "path": require.resolve("path-browserify"),
            "url": require.resolve("url/"),
            "zlib": require.resolve("browserify-zlib"),
            "buffer": require.resolve("buffer/"),
            "stream": require.resolve("stream-browserify"),
            "assert": require.resolve("assert/"),
            "constants": require.resolve("constants-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "querystring": require.resolve("querystring-es3"),
            "vm": require.resolve("vm-browserify"),
            "tty": require.resolve("tty-browserify"),
            "http": require.resolve("stream-http"),
            "https": false,
            "crypto": false,
            "child_process": false,
            "worker_threads": false,
            "module": false,
            "fs": false,
      "path": require.resolve("path-browserify")
      
        }
    },
    

        output : {
            path : path.resolve("frontend","public"),
            filename : "bundle.js"
        }

};
    
  
    

    



    

