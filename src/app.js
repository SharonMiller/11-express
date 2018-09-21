'use strict';
const debug = require('debug')('app');
import express from 'express';

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import slothsRouter from './api/slothsRouter';
app.use(slothsRouter);
app.all('/*', (req, res) => {
  res.status(404).end();
});

module.exports = app;


