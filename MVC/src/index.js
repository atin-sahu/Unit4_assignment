const express = require("express");

const app = express();

const connect = require("./configs/db");

app.listen("5555", async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(err);
    }
    console.log("listening on port 5000");
})