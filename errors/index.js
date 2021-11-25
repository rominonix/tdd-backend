class productError extends Error{}

// class InvalidBody extends productError{
//     constructor(fields){
//         super()
//         this.fields=fields
//         this.message=`Invalid body, required field:${this.fields.join(",")}`
//         this.errorCode=400
//     }
// }

class InvalidBody extends productError{
    constructor(){
      super()
      this.message = `Invalid body, try again`
      this.errorCode = 400
    }
  }


module.exports = {
   
    InvalidBody
   
  }