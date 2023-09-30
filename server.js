require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const employeeRoute = require('./routes/employeeRoute')

const app = express()


const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.get('/', (req,res) => {
    res.send("Hello Employee Tracker")
})


app.use('/api/employees', employeeRoute);




mongoose.connect(MONGO_URL)
.then(() => {
    console.log("MongoDb connected...")
    app.listen(PORT, () => {
        console.log(`server is running at port ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})