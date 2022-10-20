const { Router } = require('express');
const router = Router();
const url = require('url');
const Taxa = require('../model/Assembleia');
const Assembleia = require('../model/Veiculo');

router.get('/api/assembleia/getOne', async (req, res) => {
    const q = url.parse(req.url, true).query;
    const assembleia = await Vaga.findByPk(q.id);
    res.json({assembleia});
});

router.getAll('/api/assembleia/getAll', async (req, res) => {
    const assembleias = await Usuario.findAll();
    res.json({assembleias});
});

router.get('/api/assembleia/save', async (req, res) => {
    const q = url.parse(req.url, true).query;

    var assembleia = await Assembleia.findByPk(q.id);

    if (!assembleias){
        const assembleiaNova = await Assembleia.create({
            assunto: q.assunto,
            data_ocorrencia: q.data_ocorrencia,
        });

        res.json({assembleiaNova});
    } else {
        assembleia.assunto = q.assunto;
        assembleia.data_ocorrencia = q.data_ocorrencia;
        await assembleia.Save();

        res.json({assembleia});
    }
});

router.get('/api/assembleia/remove', async (req, res) => {
    const q = url.parse(req.url, true).query;

    const assembleia = await Assembleia.findByPk(q.id);

    if (assembleia){
        await Assembleia.destroy({ where: { id: id}});
        res.json({resposta: "Assembleia removida"});
    } else {
        res.json({resposta: "Assembleia inexistente"});
    }
    
});

module.exports = router;