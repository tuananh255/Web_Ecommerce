const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require("dotenv").config()
const PORT  = process.env.PORT || 4000
const authRoute =require('./routes/authRoute')
const productRoute =require('./routes/productRoute')
const blogRoute =require('./routes/blogRoute')
const categoryRoute =require('./routes/productCategoryRoute')
const blogCatRoute =require('./routes/blogCatRoute')
const brandRoute =require('./routes/brandRoute')
const cors = require('cors')
const dbConnect = require('./config/dbConnect')
const { notFound, errorHandle } = require('./middlewares/errorHandle')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
// 5:38
dbConnect()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(cors())
app.use(cookieParser())


// tới api này thì sẽ meet vào route đó và sử lý
app.use('/api/user',authRoute)
app.use('/api/product',productRoute)
app.use('/api/blog',blogRoute)
app.use('/api/category',categoryRoute)
app.use('/api/blogcategory',blogCatRoute)
app.use('/api/brand',brandRoute)


app.use(notFound)
app.use(errorHandle)


app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})