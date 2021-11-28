const request = require("supertest");
const app = require("../app");

/* Testing get all user endpoint */
describe('GET /api/users', function () {
  it('respond with json containing a list of all users', function (done) {
   
    request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

/* Testing get user by login endpoint */
describe('GET /api/users/:login', function () {
  it('respond with json containing a single user', function (done) {
    request(app)
      .get('/api/users/5bd0fc3e-07b6-45bb-865a-81df751152f5')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Testing get a error message by giving a non-existing user login',  async () =>  {
    const response = await request(app).get('/api/users/123')
    expect(response.statusCode).toBe(500)
    expect(response.body.message).toBe(undefined)
  });
});

/* Testing post user endpoint */
describe('POST /api/users', function(done)  {
  const data = {"login": "12", "name": "dmmy"}
  const existData = {"login": "12", "name": "aa"}
  const invalidData ={"name":"abc"}
  it('respond with 200 created', function (done) {
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
  it('Testing get a error message by creating a existing user name',  async () =>  {
    const response = await request(app).post('/api/users').send(existData)
    expect(response.statusCode).toBe(500)
    expect(response.body.message).toBe(undefined)
  });
  it('Testing get a error message by creating a invalid user',  async () =>  {
    const response = await request(app).post('/api/users').send(invalidData)
    expect(response.statusCode).toBe(500)
    expect(response.body.message).toBe(undefined)
  });
});

/* Testing delete user endpoint */
describe('DELETE /api/users',function(){
  it('should respond 200 deleted',function(done){
    request(app)
    .delete('/api/users/80f6a44d-5ce1-5ceb-8252-8e79c820eb13')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect((res) => {
      expect(res.body.message).toEqual('user has deleted');
    })
    .end((err)=>{
      if(err) return done(err)
      done();
    })
  });
  it('Testing get a error message by deleting a non-existing user login',  async () =>  {
    const response = await request(app).delete('/api/users/123')
    expect(response.statusCode).toBe(500)
    expect(response.body.message).toBe(undefined)
  });
})





























// const assert = require("assert");

// describe("POST /api/users",()=>{
//   describe("given a name and login",()=>{
//     //should save the name and login to the database
//     //should respond with a json object containg whole new user info
//     test("should respond with a 200 status code", async ()=>{
//       const response = await request(app).post("/api/users").send({
//         "name":"name",
//         "login":"login"
//       })
//       expect(response.statusCode).toBe(200)
//     })
//     test("should specify json in the content type header",async()=>{
//       const response = await request(app).post("/api/users").send({
//         "name":"name",
//         "login":"login"
//       })
//       expect(response.headers['content-type']).toBe(expect.stringContaining("json"))
//     })
//   })
//   describe("when the name and login is missing",()=>{
//     //should respond with a status code 400

//   })
//   describe("when the name and login is not a string",()=>{

//   })
// })
