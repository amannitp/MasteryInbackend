
import express from 'express'

const app=express();

const port=process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("basic project using fullstack")
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            name:"joke1",
            type:"funny",
        },
        {
            id:2,
            name:"joke2",
            type:"funny",
        },
        {
            id:3,
            name:"joke3",
            type:"funny",
        },
        {
            id:4,
            name:"joke4",
            type:"funny",
        },
    ]
    res.send(jokes)
})

app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`)
})