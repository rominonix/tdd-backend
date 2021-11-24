const db = require("./connection");
require("./models/user");
require("./models/product");
require("./models/Cart");

db.sync();