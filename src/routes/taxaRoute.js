const { Router } = require('express');
const router = Router();
const url = require('url');
const Taxa = require('../model/Taxa');

router.get('/api/taxa/getOne', async (req, res) => {
    const q = url.parse(req.url, true).query;
    const taxa = await Vaga.findByPk(q.id);
    res.json({taxa});
});

router.getAll('/api/taxa/getAll', async (req, res) => {
    const taxas = await Usuario.findAll();
    res.json({taxas});
});

router.get('/api/taxa/save', async (req, res) => {
    const q = url.parse(req.url, true).query;

    var taxa = await Taxa.findByPk(q.id);

    if (!taxa){
        const taxaNova = await Taxa.create({
            descricao: q.descricao,
            valor: q.valor,
            taxa_condominio: q.taxa_condominio
        });

        res.json({taxaNova});
    } else {
        taxa.descricao = q.descricao;
        taxa.valor = q.valor;
        taxa.taxa_condominio = q.taxa_condominio;
        await taxa.Save();

        res.json({taxa});
    }
});

router.get('/api/taxa/remove', async (req, res) => {
    const q = url.parse(req.url, true).query;

    const taxa = await Taxa.findByPk(q.id);

    if (taxa){
        await Taxa.destroy({ where: { id: id}});
        res.json({resposta: "Taxa removida"});
    } else {
        res.json({resposta: "Taxa inexistente"});
    }
    
});

module.exports = router;