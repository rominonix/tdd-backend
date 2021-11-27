const request = require("supertest");
const app = require("../app");
let userLogin = "94837ecf-14a4-4258-864c-a3ea924fbabc";
describe("Test cart endpoints", () => {
  //----------------- Test GET /api/carts/:userLogin ------------------- //
  test("GET /api/carts/:userLogin - Check if content-type are JSON and status 200", (done) => {
    request(app)
      .get(`/api/carts/${userLogin}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test("GET /api/products - Check if the object products have a property 'cartItems'", async () => {
    const res = await request(app).get(`/api/carts/${userLogin}`);
    const cart = res.body;
    expect(cart).toHaveProperty("cartItems");
  });

  test("GET /api/carts/:userLogin- Check if have property 'amount'", async () => {
    const res = await request(app).get(`/api/carts/${userLogin}`);
    const singleItem = res.body.cartItems[0]
    expect(singleItem).toHaveProperty("amount");
  });

  //----------------- Test POST /api/carts/:userLogin ------------------- //

  test("POST /api/carts/:userLogin - Check if content-type are JSON and status 201", (done) => {
    request(app)
      .post(`/api/carts/${userLogin}`)
      .send({
        amount: 78,
        productId: "b6d30b48-e2ec-4b53-8c41-41c60db2a8bb",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test("POST /api/carts/:userLogin - Check if message from body is 'You have registered a new item in cart!'", async () => {
    const newItem = { amount: 7, productId: "b6d30b48-e2ec-4b53-8c41-41c60db2a8bb"};
    const res = await request(app).post(`/api/carts/${userLogin}`).send(newItem) 
    const actual = res.body.message;
    const expected = "You have registered a new item in cart!";
    expect(actual).toBe(expected)
  });

  test("POST /api/carts/:userLogin - Check if message from body is 'Amount must be a positiv number and integer'", async () => {
    const newItem = { amount: -7, productId: "b6d30b48-e2ec-4b53-8c41-41c60db2a8bb"};
    const res = await request(app).post(`/api/carts/${userLogin}`).send(newItem) 
    const actual = res.body.message;
    const expected = "Amount must be a positiv number and integer";
    expect(actual).toBe(expected)
  });
});

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
// describe('update /api/carts/:userLogin/:itemId', function () {
//     let data = { "amount": 3 }
//     it('respond with 200 update', function (done) {
//         request(app)
//             .put('/api/carts/0b091260-10fe-4ac6-b122-e58a398587d9/417c5d33-c82d-4515-8879-b5e8ce7695f4')
//             .send(data)
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .end((err) => {
//                 if (err) return done(err);
//                 done();
//             });
//     });
// })
