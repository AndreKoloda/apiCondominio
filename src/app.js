const express = require('express');
const app = express();

app.use(require('./routes/acessosRoute'));
app.use(require('./routes/assembleiaRoute'));
app.use(require('./routes/condominioRoute'));
app.use(require('./routes/contratoRoute'));
app.use(require('./routes/taxaRoute'));
app.use(require('./routes/usuarioRoute'));
app.use(require('./routes/vagaRoute'));
app.use(require('./routes/veiculoRoute'));
app.use(require('./routes/votacaoRoute'));

module.exports = app;