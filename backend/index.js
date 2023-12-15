const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require("dotenv").config()
const PORT  = process.env.PORT || 4000
const dbConnect = require('./config/dbConnect')
const authRoute =require('./routes/authRoute')
const { notFound, errorHandle } = require('./middlewares/errorHandle')
const cors = require('cors')
dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(cors())


// tới api này thì sẽ meet vào route đó và sử lý
app.use('/api/user',authRoute)
app.use(notFound)
app.use(errorHandle)


app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})