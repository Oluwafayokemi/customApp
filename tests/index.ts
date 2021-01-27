import * as tape from 'tape'
import app from '../src/server'
const request = require('supertest');

tape('POST /user', (assert:any) => {
  const user = { name: 'Fayokemi' };
  request(app)
  // @ts-ignore
    .post("/user")
    .end(function (err, res) {
 
      assert.error(err, 'No error');
      assert.ok('created successfully');
      assert.equals(res.body.message, 'user created', 'retrieved successfully'  )
      assert.end();
    });

});

