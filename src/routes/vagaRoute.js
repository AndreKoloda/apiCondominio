const { Router } = require('express');
const router = Router();
const url = require('url')
const Vaga = require('../model/Vaga')

router.get('/api/vaga/getOne', async (req, res) => {
    const q = url.parse(req.url, true).query;
    const vaga = await Vaga.findByPk(q.chave);
    res.json({vaga});
});

router.getAll('/api/vaga/getAll', async (req, res) => {
    const vaga = await Vaga.findAll();
    res.json({vaga});
});

router.get('/api/vaga/save', async (req, res) => {
    const q = url.parse(req.url, true).query;

    var vaga = await Vaga.findByPk(q.id);

    if (!user){
        const vagaNova = await Vaga.create({
            id: q.id_usuario,
            id_usuario: q.id_usuario ?? null,
        });

        res.json({vagaNova});
    } else {
        vaga.id_usuario = q.id_usuario;
        await vaga.Save();

        res.json({vaga});
    }
});

router.get('/api/vaga/remove', async (req, res) => {
    const q = url.parse(req.url, true).query;

    const vaga = await Vaga.findByPk(q.id);

    if (vaga){
        await Vaga.destroy({ where: { id: id}});
        res.json({resposta: "Vaga removida"});
    } else {
        res.json({resposta: "Vaga inexistente"});
    }
    
});

module.exports = router;