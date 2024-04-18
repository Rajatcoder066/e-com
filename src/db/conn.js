const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://rajatpandit06655:admin@hello.lky4xpp.mongodb.net/?retryWrites=true&w=majority&appName=hello",{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connection Successfully");
}).catch((e)=>{
    console.log("No connection");
})