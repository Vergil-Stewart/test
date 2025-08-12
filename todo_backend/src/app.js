const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes.js');
const errorHandler = require('./middlewares/errorHandler.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products',productRoutes);
app.use(errorHandler);

module.exports = app;