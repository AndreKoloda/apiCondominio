const express = require("express");
const app = express();
const port = process.env.PORT || 3000

const acessos = require("./src/acessos/acessos.json");

app.get("/acessos", (req,res) => {
    return res.json(acessos)
})

app.listen(port, () => {
    console.log("Servidor está rodando..")
} )