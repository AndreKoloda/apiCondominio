const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// app.use(require('./routes/acessosRoute'));
// app.use(require('./routes/assembleiaRoute'));
// app.use(require('./routes/condominioRoute'));
// app.use(require('./routes/contratoRoute'));
// app.use(require('./routes/taxaRoute'));
app.use(require('./routes/usuarioRoute'));
// app.use(require('./routes/vagaRoute'));
// app.use(require('./routes/veiculoRoute'));
// app.use(require('./routes/votacaoRoute'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    next();
    });

module.exports = app;