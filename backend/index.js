const express = require('express');
const dotenv = require('dotenv');
const { connectDatabase } = require('./config/database');
const bodyParser = require('body-parser');
const pinRoute = require('./routes/pinRoutes');
const userRoute = require('./routes/userRoutes');

const app = express();
//config
// require('dotenv').config();
dotenv.config({path:"config/config.env"})

//database connection
connectDatabase()

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

//routes
app.use('/api/pins',pinRoute)
app.use('/api/user',userRoute)


const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})