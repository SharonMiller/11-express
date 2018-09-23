'use strict';

require('babel-register')({
  presets: [ 'env' ],
});

require('dotenv').config();
require('./src/app.js').start(process.env.PORT);

// const app = require('./src/app.js');
// app.listen(process.env.PORT, () => {
//   console.log(`server is up and running on port ${process.env.PORT}`);
// });

