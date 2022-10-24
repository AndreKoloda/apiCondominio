const { Router } = require('express');
const router = Router();
const url = require('url')

const Veiculo = require('../model/Veiculo')

router.get('/api/veiculo/getOne', async (req, res) => {
    const q = url.parse(req.url, true).query;
    const veiculo = await Veiculo.findByPk(q.chave);
    res.json({veiculo});
});

router.getAll('/api/veiculo/getAll', async (req, res) => {
    const veiculos = await Veiculo.findAll();
    res.json({veiculos});
});

router.get('/api/veiculo/save', async (req, res) => {
    const q = url.parse(req.url, true).query;

    var veiculo = await Veiculo.findByPk(q.placa);

    if (!user){
        const veiculoNovo = await Veiculo.create({
            placa: q.placa,
            marca: q.marca,
            modelo: q.modelo,
            ano: q.ano,
            id_usuario: q.id_usuario
        });

        res.json({veiculoNovo});
    } else {
        veiculo.marca = q.marca;
        veiculo.modelo = q.modelo;
        veiculo.ano = q.ano;
        veiculo.id_usuario = q.id_usuario;
        await vaiculo.Save();

        res.json({veiculo});
    }
});

router.get('/api/acessos/remove', async (req, res) => {
    const q = url.parse(req.url, true).query;

    const veiculo = await Acessos.findByPk(q.placa);

    if (veiculo){
        await Acessos.destroy({ where: { placa: placa}});
        res.json({resposta: "Veiculo removido"});
    } else {
        res.json({resposta: "Veiculo inexistente"});
    }
    
});

module.exports = router;