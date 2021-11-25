const request = require("supertest");
const app = require("../app");

/**
* Testing delete cartItem endpoint
*/
// describe('DELETE /api/carts/:userLogin/:itemId',function(){
//   it('should respond 200 deleted',function(done){
//     request(app)
//     .delete('/api/carts/ce6ab499-60fe-43b4-9a1c-e4590edc0540/f7bd1b82-e3cf-4252-b57a-3dbe0dccda13')
//     .expect(200)
//     .expect('Content-Type', /json/)
//     .expect((res) => {
//       expect(res.body.message).toEqual('cart item has deleted');
//     })
//     .end((err)=>{
//       if(err) return done(err)
//       done();
//     })
//   });
// })

/**
* Testing update cartItem endpoint
*/
describe('update /api/carts/:userLogin/:itemId', function () {
    let data = { "amount": 3 }
    it('respond with 200 update', function (done) {
        request(app)
            .put('/api/carts/0b091260-10fe-4ac6-b122-e58a398587d9/417c5d33-c82d-4515-8879-b5e8ce7695f4')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
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
