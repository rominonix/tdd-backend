const { InvalidBody } = require('../errors/index')
const User = require('../models/user')

module.exports = {
    async all(req, res, next) {
        try {
            const users = await User.findAll({ attributes: ['name', 'login'] })
            res.json({ users })
        } catch (error) { next(error) }
    },

    async getUserById(req, res, next) {
        const {login}=req.params
        const user=await User.findOne({
            where:{ login }
        })
        try{
            if(!user){
                throw new userNotFound(login)
            }
            res.json({user})            
        }catch(error){next(error)}
    },
    // async login(req,res,next){
    //     try{
    //         const {email,password}=req.body
    //         const token=await User.authenticate(email,password)
    //         res.json({token,email})
    //     }catch(error){next(error)}
    // },
    // me(req,res,next){
    //     const {name,email}= req.user
    //     res.json({name,email})
    // }

}