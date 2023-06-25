const express = require("express");
const router = express.Router();
const product = require("../models/productSchema");

/*
router.get("/",(req,res) =>{
    console.log("connect");
});
*/


//add new items
router.post("/add", async (req, res) => {
    const { pname, sqty, eqty, pdesc } = req.body;

    try {

        const preproduct = await product.findOne({ pname: pname });
        console.log(preproduct);

        if (!pname || !sqty || !eqty || !pdesc) {
            res.status(422).json("fill all the fields");
        }
        else if (preproduct) {
            res.status(420).json("the item is exist in the list");
        }
        else {
            const addproduct = new product({
                pname, sqty, eqty, pdesc
            });

            await addproduct.save();
            res.status(200).json(addproduct);
            console.log(addproduct);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})



//get data items
router.get("/getdata", async (req, res) => {
    try {
        const productdata = await product.find();
        res.status(200).json(productdata)
        console.log(productdata);
    } catch (error) {
        res.status(422).json(error);
    }
})



//get individual product
router.get("/getdata/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = (req.params);

        const individualProduct = await product.findById({ _id: id });
        console.log(individualProduct);
        res.status(200).json(individualProduct)

    } catch (error) {
        res.status(422).json(error);
    }
})


//update each product
router.patch("/update/:id", async (req, res) => {

    const { pname, sqty, eqty, pdesc } = req.body;

    try {
        const { id } = req.params;

        if (!pname || !sqty || !eqty || !pdesc) {
            res.status(422).json("fill all the fields");
        }
        else {
            const updateproduct = await product.findByIdAndUpdate(id, req.body, {
                new: true
            });

            console.log(updateproduct);
            res.status(200).json(updateproduct);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})


//delete product
router.delete("/deleteProduct/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const deleteproduct = await product.findByIdAndDelete({_id:id})
        console.log(deleteproduct);
        res.status(200).json(deleteproduct);

    } catch (error) {
        res.status(422).json(error);
    }
})



module.exports = router;