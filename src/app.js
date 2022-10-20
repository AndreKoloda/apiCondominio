const express = require('express');
const app = express();

app.use(require('./routes/acessosRoute'));

module.exports = app;