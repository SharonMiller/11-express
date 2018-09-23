'use strict';
import express from 'express';
import Sloths from '../models/sloths.js';
const debug = require('debug')('api');
const router = express.Router();


let sendJson = (res, data) => {
  res.status(200).json(data);
};

let serverError = (res, err) => {
  console.log('im in the 500 server error on slothsRouter');
  let error = { error: err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};

router.post('/api/v1/sloths', (req, res) => {
  console.log('I am in post before let sloth');
  let sloth = new Sloths(req.body.name, req.body.age);

  sloth.save()
    .then(data => sendJson(res, data))
    .catch(err => serverError(res, err));

});

router.get('/api/v1/sloths/', (req, res) => {
  // debug('get all');
  console.log('in get request');
  // req.model.fetchAll()
  Sloths.get(req.query.id)
    .then(data => sendJson(res, data))
    .catch(console.error('this is the get error'));
});

router.delete('/api/v1/sloths', (req, res) => {

  if (!req.query.id) {
    console.log('I am in delete');
    res.statusCode = '400';
    res.write(`TypeError: cannot delete blank id`);
    res.end();
  } else {
    Sloths.delete(req.query.id, res)
      .then(res => {
        res.status(200);
        res.statusMessage = 'Resource Deleted';
        res.setHeader('Content-type', 'application/json');
        res.write('');
        res.end();
      })
      .catch(err => serverError(res, err));
  }
});

export default router;