const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../database/connection");
// const bcrypt = require("bcryptjs");
// const {
//   InvalidCredentials,
//   tokenExpired,
//   unauthorized,
// } = require("../errors/index");
// const jwt = require("jsonwebtoken");
// const { v4: uuidv4 } = require("uuid");
// import { v5 as uuidv5 } from 'uuid';
const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
});

//  User.beforeCreate((user, options) => {
//   const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
//    user.login = uuidv5(user.login,MY_NAMESPACE);
//  });

// User.authenticate = async (email, password) => {
//   const user = await User.findOne({ where: { email } });
//   if (!user) {
//     throw new InvalidCredentials();
//   }

//   const matchPassword = bcrypt.compareSync(password, user.password);
//   if (matchPassword) {
//     const payload = {
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//     };
//     return jwt.sign(payload, process.env.JWT_SERCRET, { expiresIn: "1w" });
//   } else {
//     throw new InvalidCredentials();
//   }
// };
// User.validateToken = (token) => {
//   try {
//     return jwt.verify(token, process.env.JWT_SERCRET);
//   } catch (error) {
//     if (error instanceof jwt.TokenExpiredError) {
//       throw new tokenExpired();
//     } else if (eroor instanceof jwt.JsonWebTokenError) {
//       throw new unauthorized();
//     } else {
//       throw error;
//     }
//   }
// };

module.exports = User;
