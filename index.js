const Bot = require('./bot.js');
const fs = require('fs');

const config = require('./config.json');

fs.writeFileSync('resultado/invalidos.txt', '');
fs.writeFileSync('resultado/verificados.txt', '');
fs.writeFileSync('resultado/não-verificados.txt', '');

const tokens = fs.readFileSync('tokens.txt', 'utf-8').replace(/\r/gi, '').split("\n");

var i = 0;
setInterval(() => {
    if (i >= tokens.length) {
        console.log("Concluída a verificação de tokens!");
        process.exit(1);
    }
    Bot.check(tokens[i]);
    i++;
}, config.timeout);