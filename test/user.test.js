const request = require("supertest");
const app = require("../app");
const $ = require('jquery');
/**
 * Testing get all user endpoint
 */
describe('GET /api/users', function () {
  it('respond with json containing a list of all users', function (done) {
    request(app)
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

/**
* Testing get a user endpoint by giving an existing user
*/
describe('GET /api/users/:login', function () {
  it('respond with json containing a single user', function (done) {
    request(app)
      .get('/api/users/ce6ab499-60fe-43b4-9a1c-e4590edc0540')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Testing get a error message by giving a non-existing user login', function (done) {

    request(app)
      .get('/api/users/123')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(500) //expecting HTTP status code
      .expect('<!DOCTYPE html>\n' +
      '<html lang="en">\n' +
      '<head>\n' +
      '<meta charset="utf-8">\n' +
      '<title>Error</title>\n' +
      '</head>\n' +
      '<body>\n' +
      '<pre>Error: user with login 123 not found<br> &nbsp; &nbsp;at getUserByLogin (/mnt/c/Users/niluf/Documents/GitHub/Plants-project/controllers/userController.js:22:23)</pre>\n' +
      '</body>\n' +
      '</html>\n') // expecting content value
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});




/**
* Testing post user endpoint
*/
// describe('POST /api/users', function () {
//   let data = {"login": "12", "name": "dmmy"}
//   it('respond with 200 created', function (done) {
//     request(app)
//     .post('/api/users')
//     .send(data)
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .end((err) => {
//       if (err) return done(err);
//       done();
//     });
//   });
// });

/**
* Testing delete user endpoint
*/
// describe('DELETE /api/users',function(){
//   it('should respond 200 deleted',function(done){
//     request(app)
//     .delete('/api/users/7f6aba12-7591-54b3-9288-d2cc755640ab')
//     .expect(200)
//     .expect('Content-Type', /json/)
//     .expect((res) => {
//       expect(res.body.message).toEqual('user has deleted');
//     })
//     .end((err)=>{
//       if(err) return done(err)
//       done();
//     })
//   });
// })


// test('delete post', (done) => {
//   request(app)
//    .delete(`/api/post/${post.id}`)
//    .set('Authorization', `Bearer ${token}`)
//    .expect('Content-Type', /json/)
//    .expect((res) => {
//     expect(res.body.message).toEqual('Your post successfully deleted.');
//    })
//    .expect(200, done);
//  });


























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
