const request = require("supertest");
const app = require("../app");
const supertest = request(app);

const productTests = require("./productTest")
const userTests = require("./userTest")

