const express = require("express");
const Student = require("../models/students_model");

const router = express.Router();

router.post("/", async(req,res)=>{
    try {
        const student = await Student.create(req.body);
        return res.status(200).send(student);
    } catch (err) {
        return res.status(500).send({message: err.message});
    }
})

module.exports = router;