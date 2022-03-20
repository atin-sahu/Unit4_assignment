// const path = require("path");
const express = require("express");

const transporter = require("../configs/mail");

const User = require("../models/users_model");

const router = express.Router();

router.get("/",async(req,res)=>{
    try {
        const user = await User.find({}).lean().exec();
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send({mesaage:err.mesaage});
    }
})


// pagination-------------------------

router.get("/", async (req, res) => {
    try {
      const page = req.query.page || 1;
      const pagesize = req.query.pagesize || 2; 
      const skip = (page - 1) * pagesize; 

      const users = await User.find().skip(skip).limit(pagesize).lean().exec() ;
  
      const totalPages = Math.ceil((await User.find().countDocuments()));
  
      return res.status(200).send({ users, totalPages });

    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  router.post("/", async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      transporter.sendMail({
        from: '"Amazon admin" <admin@amazon.com>',
        to: user.email,
        subject: "Welcome to ABC system " + user.first_name+" "+user.last_name,
        text: "Hii "+user.first_name+" Please confirm your email address",
      });
  
      return res.status(201).send({ message: "user register successfully" });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

module.exports = router;