class productError extends Error{}

class InvalidBody extends productError{
    constructor(fields){
        super()
        this.fields=fields
        this.message=`Invalid body, required field:${this.fields.join(",")}`
        this.errorCode=400
    }
}