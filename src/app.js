// Importar pacote do express
const express = require('express');
// Instanciar o express na variavel app
const app = express();

// Importar o pacote dotenv
const dotenv = require('dotenv').config();

//Setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT);

// Exportar as configurações do app para outros arquivos acessarem
module.exports = app;