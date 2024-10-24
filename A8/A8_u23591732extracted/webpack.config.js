const path = require("path");

module.exports = [

    {

        entry : './src/index.tsx',
        mode : 'development',
        resolve: {
            
            extensions: [".ts", ".tsx", ".js", ".jsx"]
          },
        module : {
            rules : [{
                 test: /\.(t|j)sx?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/ 
            },
                { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" }
            ]
        },
        
        output : {
            path : path.resolve('public'),
            filename : 'bundle.js'

        },devtool: "source-map"
   
    }


]