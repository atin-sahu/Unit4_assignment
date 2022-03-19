const express = require("express");

const Gallery = require("../models/gallery_model");

const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const gallery = await Gallery.find({}).lean().exec();
        return res.status(200).send(gallery);
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
})

module.exports = router;