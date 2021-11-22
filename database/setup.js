const db = require("./connection");
require("../models/User");
require("../models/Product");
require("../models/Cart");

db.sync();
