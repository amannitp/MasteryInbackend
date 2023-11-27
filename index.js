// console.log("Backend with Hitesh Sir")
require('dotenv').config()
const express=require('express')

const app =express();
const port=4000;

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get("/twitter",(req,res)=>{
    res.send("Twitter")
})

app.get("/login",(req,res)=>{
    res.send("<h1>Please login </h1>")
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur code is the best youtube channel for tech</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port no ${port}`)
})