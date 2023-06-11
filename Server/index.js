const express = require('express')
const studentsData  = require('./data.json')
const app = express();
const cors = require('cors')
app.use(cors())


app.get('/data', (req,res)=> {
    try{
        res.status(200).json({
            data:studentsData
        })
    }catch(err){
        res.status(404).json({err:err})
    }
})

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    next();
})



app.all('*',(req,res)=>{
    res.status(404).send({
        message:'please provide valid route'
    })
})

const PORT = 7100;
app.listen(PORT, (req,res)=> {
    console.log(`server is running on ${PORT}`)
})