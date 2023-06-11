const express = require('express')
const studentsData  = require('./data.json')
const app = express();
const cors = require('cors')
app.use(cors())

const PORT = 7100;
app.listen(PORT, (req,res)=> {
    console.log(`server is running on ${PORT}`)
})


app.get('/data', (req,res)=> {
    res.send(studentsData)
})