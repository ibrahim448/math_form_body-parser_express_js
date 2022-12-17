const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/multiple",(req,res)=>{
    res.sendFile(__dirname + "/views/multi.html")
});

app.get("/division",(req,res)=>{
    res.sendFile(__dirname + "/views/division.html")
});

app.post("/multiple",(req,res)=>{
    const firstNumber = req.body.firstNumber;
    const secondNumber = req.body.secondNumber;
    const result = firstNumber * secondNumber;
    res.send(`Multiple Math Result: ${result}`)
});

app.post("/division",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = num1 / num2;
    res.send(`Multiple Math Result: ${result}`)
});




module.exports = app;