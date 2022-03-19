const express = require("express");
const Evaluation = require("../models/evaluations_model");

const router = express.Router();

router.post("/", async(req,res)=>{
    try {
        const evaluation = await Evaluation.create(req.body);
        return res.status(200).send(evaluation);
    } catch (err) {
        return res.status(500).send({message: err.message});
    }
})

module.exports = router;