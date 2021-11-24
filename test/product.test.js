const request = require("supertest");
const app = require("../app");
let id = "9c3caead-4f6d-4625-adf4-d9429ade87f2";

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

  test("GET /api/products/:id - Check if the product have properties 'name', 'price', 'id'", async () => {
    const res = await request(app).get(`/api/products/${id}`);
    const singleProduct = res.body.product;
    expect(singleProduct).toHaveProperty("id");
    expect(singleProduct).toHaveProperty("name");
    expect(singleProduct).toHaveProperty("price");
  });

  // test("GET /api/products/:id ahahahah", (done) => {
  //   request(app)
  //     request(app)
  //     .get(`/api/products/${id}`)
  //     .expect("Content-Type", /json/)

  //     .expect(200)
  //     // .expect((res) => {
  //     //   console.log("holi",res.body);
  //       // res.body
  //       // res.body.data.length = 2;
  //       // res.body.data[0].email = "test@example.com";
  //       // res.body.data[1].id = elementId;
  //       // res.body.data[1].email = "mendes@example.com";
  //     })
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       return done();
  //     });
  // });


  // test if id is string
  // test if price are not negative number

  //----------------- Test POST /api/products/ ------------------- //

  // test("GET /api/products - Check if the new product have a property 'name', 'price', 'id'", async () => {
    // const res = await request(app).get("/api/products");
    // const objectProducts = res.body;
    // expect(objectProducts).toHaveProperty('products')
    // console.log(res.body.products[0]);
    // const firstProduct = res.body.products[0];
    // const string = true
    // expect(firstProduct).toHaveProperty('name')
    // expect(firstProduct).toBe(string)
    // expect(firstProduct).toHaveProperty('id')
    // expect(firstProduct).toHaveProperty('price')
  // });

  // test if name is string
  // test if price is a positive number  and integer

  //----------------- Test PUT /api/products/:id ------------------- //

  // test if id are string
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

  //????
});
