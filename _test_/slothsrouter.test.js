import slothsRouter from '../src/api/slothsRouter';
import request from 'supertest';
// const express = require('express');
// import app from '../src/app';

describe('sloth route', () => {
  it('should return 404 for any urout that does not have a valid id get', () => {
    request(slothsRouter)
      .get('/api/v1/sloths')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).toBeDefined();
      });
  });
  it('post test', () => {
    request(slothsRouter)
      .post('/api/v1/sloths')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).toBeDefined();
      });
  });
});