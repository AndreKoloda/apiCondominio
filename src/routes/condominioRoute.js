const { Router } = require('express');
const router = Router();
const url = require('url');
const Condominio = require('../model/Condominio');

router.get('/api/condominio/getOne', async (req, res) => {
    const q = url.parse(req.url, true).query;
    const condominio = await Condominio.findByPk(q.id);
    res.json({condominio});
});

router.getAll('/api/condominio/getAll', async (req, res) => {
    const condominio = await Condominio.findAll();
    res.json({condominio});
});

router.get('/api/condominio/save', async (req, res) => {
    const q = url.parse(req.url, true).query;

    var condominio = await Condominio.findByPk(q.id);

    if (!condominio){
        const condominioNovo = await Condominio.create({
            valor: q.valor,
            tamanhoM2: q.tamanhoM2,
            disponivel: q.disponivel
        });

        res.json({condominioNovo});
    } else {
        condominio.valor = q.valor;
        condominio.tamanhoM2 = q.tamanhoM2;
        condominio.disponivel = q.disponivel;
        await condominio.Save();

        res.json({condominio});
    }
});

router.get('/api/condominio/remove', async (req, res) => {
    const q = url.parse(req.url, true).query;

    const condominio = await Condominio.findByPk(q.id);

    if (condominio){
        await Condominio.destroy({ where: { id: id}});
        res.json({resposta: "Condominio removida"});
    } else {
        res.json({resposta: "Condominio inexistente"});
    }
    
});

module.exports = router;