const express = require("express");

const User = require("../models/users_model");

const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
});

module.exports = router;