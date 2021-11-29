const request = require("supertest");
const app = require("../app");
const { isValidUuid } = require("../utils");
let id = "d3fb7580-2eb7-48c3-a341-1fc9ec35819c";

describe("Test product endpoints", () => {
  //----------------- Test GET /api/products/ ------------------- //
  test("GET /api/products - Check if content-type are JSON and status 200", (done) => {
    request(app)
      .get("/api/products")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test("GET /api/products - Check if the object products length is greater than 0", async () => {
    const res = await request(app).get("/api/products");
    expect(res.body.products.length).toBeGreaterThan(0);
  });

  test("GET /api/products - Check if the object products have a property 'products'", async () => {
    const res = await request(app).get("/api/products");
    const objectProducts = res.body;
    expect(objectProducts).toHaveProperty("products");
  });

  //----------------- Test GET /api/products/:id ------------------- //

  test("GET /api/products/:id - Check if content-type are JSON and status 200", (done) => {
    request(app)
      .get(`/api/products/${id}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test("GET /api/products/:id - Check if the product have properties 'id', 'name', 'price'", async () => {
    const res = await request(app).get(`/api/products/${id}`);
    const singleProduct = res.body.product;
    expect(singleProduct).toHaveProperty("id", "name", "price");
  });

  test("GET /api/products/:id - Check if id is a valid uuid", async () => {
    const res = await request(app).get(`/api/products/${id}`);
    const validId = res.body.product.id;
    const actual = isValidUuid(validId);
    const expected = true;
    expect(actual).toBe(expected);
  });

  //----------------- Test POST /api/products/ ------------------- //

  test("POST /api/products - Check if content-type are JSON and status created 201", (done) => {
    request(app)
      .post("/api/products")
      .send({
        name: "Rose",
        price: 66,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  test("POST /api/products - Check if message from body is 'You have registered a new product!'", async () => {
    const newProduct = { name: "Azalea", price: 6 };
    const res = await request(app).post("/api/products").send(newProduct);
    const actual = res.body.message;
    const expected = "You have registered a new product!";
    expect(actual).toBe(expected);
  });

  test("POST /api/products - Check if price is negativ number and expected message 'Price must be a positiv number and integer'", async () => {
    const newProduct = { name: "Azalea", price: -6 };
    const res = await request(app).post("/api/products").send(newProduct);
    const actual = res.body.message;
    const expected = "Price must be a positiv number and integer";
    expect(actual).toBe(expected);
  });

  //----------------- Test PUT /api/products/:id ------------------- //

  test("PUT /api/products/:id - Check if content-type are JSON and status 200", (done) => {
    request(app)
      .put(`/api/products/${id}`)
      .send({
        name: "Hortensia",
        price: 45,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  test("PUT /api/products/:id - Check if message from body is 'Product has updated!'", async () => {
    const updateProduct = { name: "Hortensia", price: 78 };
    const res = await request(app)
      .put(`/api/products/${id}`)
      .send(updateProduct);
    const actualMessage = res.body.message;
    const expected = "Product has updated!";
    expect(actualMessage).toBe(expected);
  });

  test("PUT /api/products/:id - Check if key name is not word and expected message 'Name must be words'", async () => {
    const updateProduct = { name: 999, price: 78 };
    const res = await request(app)
      .put(`/api/products/${id}`)
      .send(updateProduct);
    const actualMessage = res.body.message;
    const expected = "Name must be words";
    expect(actualMessage).toBe(expected);
  });

  //----------------- Test DELETE /api/products/:id ------------------- //

  // test("DELETE /api/products/:id - Check if content-type are JSON and status 200", (done) => {
  //   request(app)
  //     .delete(`/api/products/62eae9d5-edd2-4511-a8da-27620e35457b`)
  //     .set("Accept", "application/json")
  //     .expect("Content-Type", /json/)
  //     .expect(200)
  //     .end((err) => {
  //       if (err) return done(err);
  //       done();
  //     });
  // });

  // test("DELETE /api/products/:id - Check if message from body is 'Product successfully deleted.'", async () => {

  //   const res = await request(app).delete('/api/products/498188e4-02f8-412b-a730-f2778a397ef5')
  //   const actualMessage = res.body.message;
  //   console.log("kkk", actualMessage);
  //   const expected = "Product successfully deleted."
  //   expect(actualMessage).toBe(expected);
  // });

  // test("DELETE /api/products/:id - Check if message from body is 'Product doesn't exist'", async () => {

  //   const res = await request(app).delete('/api/products/06a8fdfb-07c8-4e21-8ede-262d64ac70e6')
  //   const actualMessage = res.body.message;
  //   console.log("kkk", actualMessage);
  //   const expected = "Product doesn't exist"
  //   expect(actualMessage).toBe(expected);
  // });
});
