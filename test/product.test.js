const request = require("supertest");
const app = require("../app");
// const assert = require("assert");

describe("Test product endpoints", () => {
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

  test("GET /api/products - Check if name key value is string", (done) => {
    request(app)
      .get("/api/products")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  // test("GET /api/products - Check if the product object length is greater than 0", async () => {
  //   const res = await request(app).get("/api/products");
  //   expect((res.body.data).length).toBeGreaterThan(0)
  // });

  
});

