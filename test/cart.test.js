const request = require("supertest");
const app = require("../app");

/* Testing update cartItem endpoint*/
describe('update /api/carts/:userLogin/:itemId', function () {
    let data = { "amount": 3 }
    let invalidData = { "amount": "hello" }
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
    it('should return error if amount is not number', async ()=> {
        const response = await request(app)
        .put('/api/0b091260-10fe-4ac6-b122-e58a398587d9/417c5d33-c82d-4515-8879-b5e8ce7695f4')
        .send(invalidData)
        expect(response.statusCode).toBe(404)
        expect(response.body.message).toBe(undefined)
    });
    it('should return a error message by putting data to a non-existing item id ', async () => {
        const response = await request(app).put('/api/users/0b091260-10fe-4ac6-b122-e58a398587d9/123')
        .send(data)
        expect(response.statusCode).toBe(404)
        expect(response.body.message).toBe(undefined)
    });
})

/*Testing delete cartItem endpoint*/
describe('DELETE /api/carts/:userLogin/:itemId', function () {
    it('should respond 200 deleted', function (done) {
        request(app)
            .delete('/api/carts/ce6ab499-60fe-43b4-9a1c-e4590edc0540/f7bd1b82-e3cf-4252-b57a-3dbe0dccda13')
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
    it('Testing get a error message by deleting a non-existing user login ', async () => {
        const response = await request(app).delete('/api/users/123/c845823c-deea-4a8d-bc88-d1d6f48f7561')
        expect(response.statusCode).toBe(404)
        expect(response.body.message).toBe(undefined)
    });
    it('Testing get a error message by deleting a non-existing item id ', async () => {
        const response = await request(app).delete('/api/users/0b091260-10fe-4ac6-b122-e58a398587d9/123')
        expect(response.statusCode).toBe(404)
        expect(response.body.message).toBe(undefined)
    });
})
