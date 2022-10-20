const { Router } = require('express');
const router = Router();
const url = require('url')

const Acessos = require('../model/Acessos')

router.get('/api/acessos/getOne', async (req, res) => {
    const q = url.parse(req.url, true).query;
    const acessos = await Acessos.findByPk(q.chave);
    if (acessos){
        res.json({resposta: 1});
    } else {
        res.json({resposta: 0});
    }
});

router.get('/api/acessos/save', async (req, res) => {
    const q = url.parse(req.url, true).query;
    var chave = q.chave;
    var admin = q.admin;

    const user = await Acessos.findByPk(chave);

    if (!user){
        const acessos = await Acessos.create({
        chave: q.chave,
        is_admin: q.admin,
        ativo: q.ativo
        });
        res.json({resposta: 1});
        return;
    } else {
        res.json({resposta: 0});
    }
});

router.get('/api/acessos/remove', async (req, res) => {
    const q = url.parse(req.url, true).query;
    var chaveExcluir = q.chave;
    const user = await Acessos.findByPk(chaveExcluir);

    if (user){
        await Acessos.destroy({ where: 
            { chave: chaveExcluir 
       }});
       res.json({resposta: 1});
    } else {
       res.json({resposta: 0});
    }
    
});

module.exports = router;