const request = require("supertest");
const app = require("../app");



describe("test user endpoints", () => {

  /* Testing get all user endpoint */

  test('respond with json containing a list of all users', (done) => {
    request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });


  /* Testing get user by login endpoint */

  test('respond with json containing a single user', (done) => {
    request(app)
      .get('/api/users/6806c071-4a86-4ce1-8e82-8631560a6cfd')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('Testing get a error message by giving a non-existing user login', async () => {
    const response = await request(app).get('/api/users/123')
    expect(response.statusCode).toBe(500)
    expect(response.body.message).toBe(undefined)
  });

  /* Testing post user endpoint */

  const data = { "login": "12rsdafjk4", "name": "Azabbb" }
  const existData = { "login": "12", "name": "aa" }
  const invalidData = { "name": "abc" }
  test('respond with 200 created', (done) => {
    request(app)
      .post('/api/users')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  test('Testing get a error message by creating a existing user name', async () => {
    const response = await request(app).post('/api/users').send(existData)
    expect(response.statusCode).toBe(500)
    expect(response.body.message).toBe(undefined)
  });
  test('Testing get a error message by creating a invalid user', async () => {
    const response = await request(app).post('/api/users').send(invalidData)
    expect(response.statusCode).toBe(500)
    expect(response.body.message).toBe(undefined)
  });

  /* Testing delete user endpoint */

  test('should respond 200 deleted', (done) => {
    request(app)
      .delete('/api/users/d058ccd9-6ecb-46a2-95f9-81c1fd663e9d')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.message).toEqual('user has deleted');
      })
      .end((err) => {
        if (err) return done(err)
        done();
      })
  });
  test('Testing get a error message by deleting a non-existing user login', async () => {
    const response = await request(app).delete('/api/users/123')
    expect(response.statusCode).toBe(500)
    expect(response.body.message).toBe(undefined)
  });
})
