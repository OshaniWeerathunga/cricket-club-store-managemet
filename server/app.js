require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./mongodb/connect");
const product = require("./models/productSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = process.env.PORT || 8003;

app.use(cors(
    {
        origin: ["https://olympic-ground-app-3hp7.vercel.app"],
        methods: ["POST","GET"],
        credentials: true
    }
));
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})

app.use(router);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});
