const bodyParser = require('body-parser')
const express = require('express')
const mongoose  = require('mongoose')
const app = express()
require('ejs')
require('dotenv').config()
const port = process.env.PORT 
const MONGO_URI = process.env.URI
app.use(bodyParser.urlencoded({extended : true}))
app.set('view engine','ejs')
const studentRouter = require('./routes/student_route')
const staffRouter = require('./routes/staff_route')
app.use('/student',studentRouter)
app.use('/staff',staffRouter)
mongoose.connect(MONGO_URI)
    .then((result) => {
        console.log("Connected to MongoDB database");
    }).catch((err) => {
        console.log(err);
    });
app.get('/', (req, res) => res.render('home'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))