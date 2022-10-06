const express = require('express')
const mongoose = require('mongoose')
const user = require('./UserModal/usermodal')
const router = require('./Router/router')
require('dotenv').config()
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const PORT = process.env.PORT

mongoose.connect("mongodb://localhost:27017/hemabackend", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("db connected success");
}).catch((err) => {
    console.log(err.message);
})


app.listen(PORT, () => {
    console.log("sever listen port", PORT);
})
app.use('/api/user', router)