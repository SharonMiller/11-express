'use strict';
const debug = require('debug')('app');
import express from 'express';

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import slothsRouter from './api/slothsRouter.js';
app.use(slothsRouter);
app.all('/*', (req, res) => {
  res.status(404).end();
});

let isRunning = false;

module.exports = {
  start: (port) => {
    if (!isRunning) {
      app.listen(port, err => {
        if (err) { throw err; }
        isRunning = true;
        console.log(`Server is up on port ${port}`);
      });
    } else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server has been shut down');
    });
  },
};




