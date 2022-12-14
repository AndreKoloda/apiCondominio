const { Router } = require('express');
const router = Router();
const url = require('url');
const Usuario = require('../model/Usuario');

router.get('/api/usuario/getone', async (req, res) => {
    const q = url.parse(req.url, true).query;
    const usuario = await Usuario.findByPk(q.id);
    res.json({usuario});
});

// router.getAll('/api/usuario/getAll', async (req, res) => {
//     const usuarios = await Usuario.findAll();
//     res.json({usuarios});
// });

router.get('/api/usuario/save', async (req, res) => {
    const q = url.parse(req.url, true).query;
    const usuarioNovo = await Usuario.create({
        nome: 'Andre',
        email: 'andreckoloda@gmail.com',
        senha: '123456'
    });

    res.json({usuarioNovo});
    // var usuario = await Usuario.findByPk(q.id);

    // if (!usuario){
    //     const usuarioNovo = await Usuario.create({
    //         nome: q.nome,
    //         email: q.email,
    //         senha: q.senha
    //     });

    //     res.json({usuarioNovo});
    // } else {
    //     usuario.email = q.email;
    //     usuario.senha = q.senha;
    //     await usuario.Save();

    //     res.json({usuario});
    // }
});

router.get('/api/usuario/remove', async (req, res) => {
    const q = url.parse(req.url, true).query;

    const usuario = await Usuario.findByPk(q.id);

    if (usuario){
        await Usuario.destroy({ where: { id: id}});
        res.json({resposta: "Usuario removido"});
    } else {
        res.json({resposta: "Usuario inexistente"});
    }
    
});

router.get('/api/usuario/validar', async (req, res) => {
    const q = url.parse(req.url, true).query;

    const usuario = await Usuario.where(email == q.email);
    if (usuario){
        if (usuario.senha == q.senha){
            return true;
        }
    }
    return false;
})

module.exports = router;