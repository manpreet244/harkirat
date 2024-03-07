//creating a http server
//express
const express = require("express");

const app = express();

app.get("/" , function(req,res){
    const n = req.query.n;
     const ans = n;
    res.send("hi there"+ans);
})
app.listen(3000);