const mongoose = require("mongoose");

const connectDB=()=>{
    return mongoose.connect("mongodb+srv://atin_sahu:atin_sahu@cluster0.g41sc.mongodb.net/syoft?retryWrites=true&w=majority")
}

module.exports=connectDB