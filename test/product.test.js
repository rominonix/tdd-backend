const request = require("supertest");
const app = require("../app");

describe("Test product endpoints", () => {

  // Test GET /api/products
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

  // test("GET /api/products - Check if name key value is string", (done) => {
  //   request(app)
  //     .get("/api/products")
  //     .expect(200)
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       return done();
  //     });
  // });

  test("GET /api/products - Check if the product object length is greater than 0", async () => {
    const res = await request(app).get("/api/products");
    expect((res.body.products).length).toBeGreaterThan(0)
  });

  // escribir un utils.js con funciones para ver sui es un estring numero etc etc y luego usarla en mis controles
  
  // Test GET /api/products/:id

  // test if id is string
  // test if price are not negative number

  // Test POST /api/products/

  // test if name is string
  // test if price is a positive number  and integer

  // Test PUT /api/products/:id

  // test if id are string
  // tes if name are string
  // test if price is a positive number  and integer

  // Test DELETE /api/products/:id

  //????

  
  
});

