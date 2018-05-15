const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conecta ao banco
mongoose.connect('mongodb://root:123@ds247759.mlab.com:47759/node-store');

// Carrega os models
const Product = require('./models/product');

// Carrega as Rotas
const index = require('./routes/index');
const productsRouters = require('./routes/products');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/', index);
app.use('/products', productsRouters)

module.exports = app;