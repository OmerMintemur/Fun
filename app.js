const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const productRoutes = require('./api/routes/product');
const orderRoutes = require('./api/routes/order');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin');

});
const omer;
app.use('/product', productRoutes);
app.use('/order', orderRoutes);


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {

    res.status(error.status || 500);
    .json({
        message: error.message
    });
});





module.exports = app;