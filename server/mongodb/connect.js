const mongoose = require("mongoose");

const DB = 'mongodb+srv://oshani1996:Achin9672@cluster0.ucguifg.mongodb.net/Inventory?retryWrites=true&w=majority';



mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));
