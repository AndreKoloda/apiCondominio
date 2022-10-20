const { get } = require('./app');
const app = require('./app');
const database = require('./database');
const port = process.env.PORT || 3000

async function main() {
    await database.sync();
    app.listen(port, () => {
        console.log("Servidor está rodando..");
    });
}

main();