const Product = require("../models/product");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");

module.exports = {
  getProducts(req, res, next) {
    try {
    const products = Product.findAll({})
    res.status(200).json({products})
    } catch (error) {
      next(error);
    }
  },

 async getProductById(req, res, next) {
    try {
      const { id } = req.params;
     
      //   const productById = Products.findOne((product) => product.id === id);
      const product = await Product.findOne({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      });

      // if(!id) {throw new ProductsNotFound()}
      res.json({ product });
    } catch (error) {
      next(error);
    }
  },



//   async getUserById(req, res, next) {
//     try {
//         const { id } = req.params
//         const user = await User.findOne({
//             attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }, where: {
//                 id: {
//                     [Op.eq]: id
//                 }
//             }
//         })
//         if (!user) { throw new UserNotFound() }
//         res.json({ user })
//     } catch (error) { next(error) }

// },
  createNewProduct(req, res, next) {
    try {
      let { name, price } = req.body;
      let id = uuidv4();
      let newProduct = { id: id, name: name, price: price };

      // let result = Products.push(newProduct);
      let result = [...Products, newProduct];

      Product.push(result);

      console.log(Product);

      // console.log(typeof(result));

      // console.log(result);

      // const newProduct = Products.create({id, name, price})
      res.json({ message: `You have registered ${result}!` });
    } catch (error) {
      next(error);
    }
  },

  //   async create(req,res,next){
  //     try{
  //         let {email,name,password,role}=req.body
  //         if( !email || !name || !password || !role){
  //             throw new InvalidBody(['email','name','password','role'])
  //         }
  //          password = bcryptjs.hashSync(password, 10)
  //          const newUser  = await User.create({email,name,password,role})
  //         res.json({message:`You have registered ${newUser.role}!`})
  //     }catch(error){next(error)}
  // },

  // updateProductById(req, res, next){
  //   const id = res.Products.id
  //   try{
  //     const { name, price} = req.body
  //     if(!id||!name || !price) {
  //       throw new InvalidBody()
  //     }
  //     const updateProduct = Products.update(name, price)
  //     res.json({updateProduct, msn: "product updated"})
  //   }catch(error)
  //   {next(error)}
  // },

  // deleteProductById(req, res, next){

  // },

  //   User.updatePassword = async (email, newPassword) => {
  //     const user = await User.findOne({ where: { email } })
  //     if (!user) { throw new InvalidCredentials() }
  //     else {
  //         const newPassHash = bcryptjs.hashSync(newPassword, 10)
  //         const newPass = await User.findOne({ where: { email } })
  //         newPass.password = newPassHash
  //         await newPass.save()
  //     }
  // }

  //   async updateUserPassword(req, res, next) {
  //     const email = res.user.email
  //     try {
  //         const { newPassword } = req.body
  //         if (!email || !newPassword) {
  //             throw new InvalidBody()
  //         }
  //         const newPassToDb = await User.updatePassword(email, newPassword)
  //         res.json({ newPassToDb, msn: "Your profile was updated successfully" })
  //     } catch (error) { next(error) }
  // },
};
