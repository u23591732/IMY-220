const path = require("path");

module.exports = [

    {

        entry : './src/index.js',
        mode : 'development',
        module : {
            rules : [{
                exclude : /node_modules/,
                test: /\.js$/,
                use : {
                    loader : 'babel-loader'
                }
            }]
        },
        output : {
            path : path.resolve('public'),
            filename : 'bundle.js'

        }
   
    }


]