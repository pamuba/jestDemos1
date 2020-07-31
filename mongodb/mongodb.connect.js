const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect("mongodb://localhost:27017/todo-tdd",
        {useNewUrlParser:true});
    }catch(err)
    {
        console.log(err);
        console.log("Error Connecting to mongodb")
    }
    
}

module.exports = { connect }