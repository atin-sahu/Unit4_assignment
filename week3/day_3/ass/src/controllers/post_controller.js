const express = require("express");

const Post = require("../models/post_model");

const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const post = await Post.find().lean().exec();
        return res.status(200).send(post);
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
});

module.exports = router;