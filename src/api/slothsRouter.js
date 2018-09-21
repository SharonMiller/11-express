'use strict';
import express from 'express';
import Sloths from '../models/sloths.js';
const debug = require('debug')('api');
const router = express.Router();


let sendJson = (res, data) => {
  debug('get all');
  res.status(200).json(data);
};

let serverError = (res, err) => {
  let error = { error: err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};

router.post('api/v1/sloths', (req, res) => {
  console.log('I am in post before let sloth');
  let sloth = new Sloths(req.body.name, req.body.age);

  sloth.save()
    .then(data => sendJson(res, data))
    .catch(err => serverError(res, err));
  
});

// router.get('/api/v1/sloths', (req, res) => {
//   debug('get all');
//   fetchAll()
//     .then(data => sendJson(res, data))
//     .catch(console.error('this is the get error'));

// });

export default router;