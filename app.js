const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const expressValidator = require('express-validator');

require("dotenv").config();

//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

//app
const app = express();

//database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('database connected')).catch((error) => { console.log('error to connect DB'); });

//middelwear

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
//mongodb://127.0.0.1:27017/?

//route middelware
//app.use(authRoutes);
//to change path
app.use('/api', authRoutes);
app.use('/api', userRoutes);
//app.use('/api', productRoutes);
//app.use('/api', categoryRoutes);

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log('port is runing on port', port);
});