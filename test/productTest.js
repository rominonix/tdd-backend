const request = require("supertest");
const app = require("../app");
const assert = require("assert");

const productTest = describe("Test product endpoints", () => {
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

  test("GET /api/products - Check if 'Cactus' exist in database", (done) => {
    request(app)
      .get("/api/products")
      .expect(200, /Cactus/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  // test("GET /api/productsAAAA", (done) => {
  //   request(app)
  //     .get("/api/productsAAAA")
  //     .expect(404)
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       return done();
  //     });
  // });

  test("GET /api/products - check if the product object length is greater than 0 ", (done) => {
    request(app)
      .get("/api/products")
      // .expect((res)=>{
      //   // Object.keys(res.body.data).length
      //   res.body.data.should.equal('productId')
      //   // res.body.data.should.have.property("productId","name", "price");
      // })

      // .expect((res) => {
      //   const datalength = (res.body.data).length
      //   console.log("ahahha", datalength);
      //   // console.log(res.body)
      //   // console.log((res.body.data).length);
      //   datalength === 0
      //   // should.equal(res.body)
      //   // assert.equal(res.body.length, 1, 'Expected 1 wallet.');
      //   // Object.keys(res.body).length = 0

      // })

      // .expect(Object.keys(res.body.data).length = 0)
      // .expect(res => res.header['content-length'].should.above(0))
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  // test("GET /api/products - Checking ", async () => {
  //   const res = await request(app).get("/api/products");

    // let myVar = true
    // expect(res.status).toEqual(200);
    // expect(res.type).toEqual(expect.stringContaining("json"));
    // expect(Array.isArray(res.body.data));
    // expect(typeof myVar).toEqual("boolean");
    // expect(res.body.data[2].name).toEqual("Bamboo");
    // expect((res.body.data).length).should.be.above(0)

    // expect(res.body.data.length) === -1;
  // });
});
module.exports = productTest;
