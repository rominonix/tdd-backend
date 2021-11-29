const { unauthorized ,cartItemNotFound} = require("../errors/index");
const Cart = require("../models/cart");


module.exports={
    async updateCartItem(req,res,next){
        try{
            const ProductId=req.params.itemId
            const userLogin = req.params.userLogin
            const { amount } = req.body
            const field={}
            if(amount) field.amount=amount
            const cartItem = await Cart.findOne({ where:{ ProductId }})
            if(!cartItem){ 
                throw new cartItemNotFound(ProductId)
            }
            if (cartItem.UserLogin != userLogin) {
                throw new unauthorized()
            } 
            await Cart.update(field,{where:{ProductId}})
            res.json({message:'Updated'})
        }catch(error){next(error)}
    },

    async deleteCartItem(req,res,next){
        try{
            const ProductId=req.params.itemId
            const userLogin = req.params.userLogin

            const cartItem = await Cart.findOne({ where:{ ProductId }})
            if(!cartItem){ 
                throw new cartItemNotFound(ProductId)
            }  
            if(cartItem.UserLogin != userLogin){ 
                throw new unauthorized()
            }
            await cartItem.destroy()
            res.json({message:'cart item has deleted'})
        }catch(error){next(error)}
    },
}