const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        pname: {
            type:String,
            required:true
        },
        sqty: {
            type: Number,
            required:true
        },
        eqty: {
            type: Number,
            required:true
        },
        pdesc: {
            type: String,
            required:true
        }
});

const products = new mongoose.model("products",productSchema);

module.exports = products;