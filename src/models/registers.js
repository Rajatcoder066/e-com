const mongoose=require("mongoose");
const customerSchema=new mongoose.Schema({
name:{
    type:String,
     required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true

}
})
const Register=new mongoose.model("Register",customerSchema);
module.exports=Register;