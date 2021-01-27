import tape from 'tape'
import request from 'supertest'
import app from '../src/server'

tape('POST /user', (assert) => {
  const user = { name: 'Fayokemi' };
  request(app)
    .post('/user')
    .expect(200)
    .end((err, res) => {
      const newUser = res.body
          assert.error(err, 'No error');
          assert.same(newUser, user, 'successfully added user');
          assert.end();
        })
    });

