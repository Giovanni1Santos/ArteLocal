const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
const artesaoRoutes = require('./routes/artesaoRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/artesaos', artesaoRoutes);

module.exports = app;
