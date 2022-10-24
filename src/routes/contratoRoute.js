const { Router } = require('express');
const router = Router();
const url = require('url');
const Contrato = require('../model/Contrato');

router.get('/api/contrato/getOne', async (req, res) => {
    const q = url.parse(req.url, true).query;
    const contrato = await Vaga.findByPk(q.id);
    res.json({contrato});
});

router.getAll('/api/contrato/getAll', async (req, res) => {
    const contratos = await Usuario.findAll();
    res.json({contratos});
});

router.get('/api/contrato/save', async (req, res) => {
    const q = url.parse(req.url, true).query;

    var contrato = await Contrato.findByPk(q.id);

    if (!contratos){
        const contratoNova = await Contrato.create({
            data_inicio: q.data_inicio,
            data_fim: q.data_fim,
        });

        res.json({contratoNova});
    } else {
        contrato.data_inicio = q.data_inicio,
        contrato.data_fim = q.data_fim,
        await contrato.Save();

        res.json({contrato});
    }
});

router.get('/api/contrato/remove', async (req, res) => {
    const q = url.parse(req.url, true).query;

    const contrato = await Contrato.findByPk(q.id);

    if (contrato){
        await Contrato.destroy({ where: { id: id}});
        res.json({resposta: "Contrato removida"});
    } else {
        res.json({resposta: "Contrato inexistente"});
    }
    
});

module.exports = router;