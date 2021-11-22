const { Products } = require("../database/database.json");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getProducts(req, res, next) {
    try { 
      res.status(200).json({ data: Products });
    } catch (error) {
      next(error);
    }
  },

  getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const productById = Products.find((product) => product.id === id);
      // if(!id) {throw new ProductsNotFound()}
      res.json({ productById });
    } catch (error) {
      next(error);
    }
  },

  createNewProduct(req, res, next) {
    try {
      let { name, price } = req.body;
      let id  = uuidv4();
      let newProduct = {'id':id, 'name': name, 'price': price };

      
      // if(!name || price) {
      //   throw new InvalidBody(['id', 'name', 'price'])
      // }
      // console.log(id, name, price);

      // let result = Products.push(newProduct);
      let result = [...Products, newProduct]

      Products.push(result)

      console.log(Products);

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
