const request = require("supertest");
const app = require("../app");
const { isValidUuid, isWord } = require("../utils");
let id = "6aea66a5-b636-4f5e-8df6-fbb98f053657";

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

  test("POST /api/products - Check if message from body is 'You have registered a new product!", async () => {
    const newProduct = { name: "Azalea", price: 6 };
    const res = await request(app).post("/api/products").send(newProduct);
    const actual = res.body.message;
    const expected = "You have registered a new product!";
    expect(actual).toBe(expected);
  });


  test("POST /api/products - Check if negativa tester", async () => {
    const newProduct = { name: "Azalea", price: -6 };
    const res = await request(app).post("/api/products").send(newProduct);
    const actual = res.body.message;
    const expected = "Price must be a positiv number and integer";
    expect(actual).toBe(expected);
  });

  //----------------- Test PUT /api/products/:id ------------------- //

  // test if id are valid uuid
  // tes if name are string
  // test if price is a positive number  and integer

  //----------------- Test DELETE /api/products/:id ------------------- //

  // Test DELETE /api/products/:id

  // test("DELETE /api/products/:id", (done) => {
  //   request(app)

  //     .delete(`/api/products/${id}`)
  //     // .expect("Content-Type", /json/)
  //     .expect(200)
  //     .expect((res) => {
  //       expect(res.body.message).toEqual('Product successfully deleted.');
  //      })
  //      .end((err, res) => {
  //       if (err) return done(err);
  //       id = req.params
  //       return done();
  //     });
  // });
  // test legth after delete product
});
