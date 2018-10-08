const path = require('path');
module.exports = {
    mode:'development',
    module:{
        rules: [{
            test: /\.js$/,
            use: {
              loader: path.resolve(__dirname, './loaders/demo1.js'),
              options: {
                name: 'youzaiyouzai666'
              }
            }
          }]
    }
}