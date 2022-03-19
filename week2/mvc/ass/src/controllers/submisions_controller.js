const express = require("express");
const Submision = require("../models/submisions_model");

const router = express.Router();

router.post("/", async(req,res)=>{
    try {
        const submision = await Submision.create(req.body);
        return res.status(200).send(submision);
    } catch (err) {
        return res.status(500).send({message: err.message});
    }
})

module.exports = router;