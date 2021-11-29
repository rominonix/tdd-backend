const request = require("supertest");
const app = require("../app");
let userLogin = "bb9ffa46-38cf-4f7a-9f98-1d18b5d14377";

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
        productId: "c845823c-deea-4a8d-bc88-d1d6f48f7561",
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
    const newItem = { amount: 7, productId: "c845823c-deea-4a8d-bc88-d1d6f48f7561" };
    const res = await request(app).post(`/api/carts/${userLogin}`).send(newItem)
    const actual = res.body.message;
    const expected = "You have registered a new item in cart!";
    expect(actual).toBe(expected)
  });

  test("POST /api/carts/:userLogin - Check if message from body is 'Amount must be a positiv number and integer'", async () => {
    const newItem = { amount: -7, productId: "c845823c-deea-4a8d-bc88-d1d6f48f7561" };
    const res = await request(app).post(`/api/carts/${userLogin}`).send(newItem)
    const actual = res.body.message;
    const expected = "Amount must be a positiv number and integer";
    expect(actual).toBe(expected)
  });

  /* Testing update cartItem endpoint*/

  let data = { "amount": 3 }
  let invalidData = { "amount": "hello" }
  test('respond with 200 update', (done) => {
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
  }); it('should return error if amount is not number', async () => {
    const response = await request(app)
      .put('/api/0b091260-10fe-4ac6-b122-e58a398587d9/417c5d33-c82d-4515-8879-b5e8ce7695f4')
      .send(invalidData)
    expect(response.statusCode).toBe(404)
    expect(response.body.message).toBe(undefined)
  });
  test('should return a error message by putting data to a non-existing item id ', async () => {
    const response = await request(app).put('/api/users/0b091260-10fe-4ac6-b122-e58a398587d9/123')
      .send(data)
    expect(response.statusCode).toBe(404)
    expect(response.body.message).toBe(undefined)
  });

  /*Testing delete cartItem endpoint*/

  test('should respond 200 deleted', (done) => {
    request(app)
      .delete('/api/carts/0b091260-10fe-4ac6-b122-e58a398587d9/417c5d33-c82d-4515-8879-b5e8ce7695f4')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body.message).toEqual('cart item has deleted');
      })
      .end((err) => {
        if (err) return done(err)
        done();
      })
  });
  test('Testing get a error message by deleting a non-existing user login ', async () => {
    const response = await request(app).delete('/api/users/123/c845823c-deea-4a8d-bc88-d1d6f48f7561')
    expect(response.statusCode).toBe(404)
    expect(response.body.message).toBe(undefined)
  });
  test('Testing get a error message by deleting a non-existing item id ', async () => {
    const response = await request(app).delete('/api/users/0b091260-10fe-4ac6-b122-e58a398587d9/123')
    expect(response.statusCode).toBe(404)
    expect(response.body.message).toBe(undefined)
  });
});





