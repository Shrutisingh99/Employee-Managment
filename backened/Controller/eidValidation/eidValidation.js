const joi = require("joi");
const employeeSchema = joi.object({
    eid:joi.string().required(),
    ename:joi.string().min(2).max(50).required(),
    email:joi.string().min(2).max(50).required(),
    hiredate:joi.date(),
    salary:joi.number().required()
})
const employeeSignup = (req,res,next) =>{
    const{error, value} = employeeSchema.validate(req.body)

    if(error){
        console.log(error)
        return res.send("Invalid request..");
    }
    next();
    res.send("Register Successfully");
}
module.exports = {employeeSignup}