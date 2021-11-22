//const { InvalidBody } = require('../errors/index')
const User = require('../models/user')
const { v4: uuidv4 } = require("uuid");

module.exports = {
    async allUser(req, res, next) {
        try {
            const users = await User.findAll({ attributes: ['name', 'login'] })
            res.json({ users })
        } catch (error) { next(error) }
    },

    async getUserByLogin(req, res, next) {
        const { login } = req.params
        const user = await User.findOne({
            where: { login }
        })
        try {
            // if (!user) {
            //     throw new userNotFound(login)
            // }
            res.json({ user })
        } catch (error) { next(error) }
    },
    async creatUser(req, res, next) {

        try {
            const { login, name } = req.body
            // if (!login || !name) {
            //     throw new InvalidBody(['login', 'name'])
            // }
            const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

            
            const userLogin = uuidv5(login, MY_NAMESPACE);
            const newUser = await Recept.create({  name, userLogin })
            res.json({ newUser })
        } catch (error) { next(error) }
    },
    async deleteUser(req,res,next){
        try{
            const {login}=req.params
            const users = await Recept.findOne({where:{login}})
            await users.destroy()
            res.json({message:'user has deleted'})
        }catch(error){next(error)}
    }
}