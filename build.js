const webpack = require('webpack');
const nodemon = require('nodemon');

let NODEMON_MUTE = false;
webpack(require('./webpack.config.js')).watch({}, (err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log(stats.toString());
  }

  if (!NODEMON_MUTE) {
    NODEMON_MUTE = true;
    nodemon({
      script: './dist/server.js',
    });
  }
});
