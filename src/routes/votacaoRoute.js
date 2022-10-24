const { Router } = require('express');
const router = Router();
const url = require('url');
const Taxa = require('../model/Votacao');

router.get('/api/votacao/getTotal', async (req, res) => {
    const q = url.parse(req.url, true).query;
    const votacao = await Vaga.findByPk(q.id);
    res.json({votacao});
});

router.get('/api/votacao/save', async (req, res) => {
    const q = url.parse(req.url, true).query;

    var votacao = await Votacao.findByPk(q.id);

    if (!votacao){
        const votacaoNova = await Votacao.create({
            voto: q.voto,
            observacao: q.observacao,
        });

        res.json({votacaoNova});
    } else {
        res.json({});
    }
    
});

module.exports = router;