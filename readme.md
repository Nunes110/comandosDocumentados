# Documentação da API
* Escolher local do computador para criar a pasta do projeto
* Abrir o gitBash nesta pasta
```
mkdir NOME_PROJETO
```
Acessar a pasta do projeto
```
cd NOME_PROJETO
```
Abrir a pasta no VSCode 
```
code .
```
Iniciar o gerenciador de pacotes Node
```
npm init -y
```
Criar arquivo .gitignore
```
touch .gitignore
```
Criar arquivo .env: armazenará as variáveis do ambiente
```
touch .env
```
# Instalar pacotes da API
```
npm i express nodemon dotenv mysql2
```
* espress: será o servidor da api
* nodemon: atualizar os arquivos alterados sem parar o servidor 
* dotenv: gerenciador de variáveis de ambiente

Informar arquivos e pastas no .gitignore
```
node_modules
.env
```
Criar pasta src para estrutura do projeto
```
mkdir src
```
Criar arquivo server.js na pasta src
```
touch src/server.js
```
Configurar o servidor
```
// Importar pacote do express
const express = require('express');
// Instanciar o express na variavel app
const app = express();
// Importar o pacote dotenv
const dotenv = require('dotenv').config();
// Definir a porta do servidor 
const PORT = process.env.PORT || 3005;

// Testar servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`));
```

Criar comando para rodar o servidor
```
"start":"nodemon src/server.js"
```
Rodar o comando no terminal com gitBash
```
npm run start
```
Parar o server no terminal com gitBash
```
Ctrl + C
```

## Criar estrutura para o projeto
Criar arquivo app.js na pasta src
```
touch src/app.js
```

## Rodar o comando 'npm install' sempre que fizer um clone do gitHub

## Criar o arquivo .env e .env.example
```
touch .env
```
* Criar arquivo para salvar as variáveis necessárias da aplicação sem os valores
```
touch .env.example
```

* Criar pasta routes
```
mkdir routes
```

* Criar arquivo crudRouter.js dentro da pasta routes
```
nano crudRouter.js
```
### Ctrl + O: Salvar o arquivo
### Enter: Confirmar nome do arquivo
### Ctrl + X: Fechar o arquivo

* Digitar o código no arquivo criado
```
// Importar pacote do express
const { Router } = require('express');
// Instanciar o Router na variavel router
const router = Router();
// Importar funções do controller para a rota acessar as funções
const { 
    listarDados, 
    gravarDados, 
    atualizarDados, 
    deletarDados
 } = require('../controllers/controller');

router.get('/listar', listarDados);

router.post('/gravar',gravarDados);

router.put('/atualizar/:id',atualizarDados);

router.delete('/deletar/:id',deletarDados);

module.exports = router;
```

### CRIAÇÃO DE CONTROLLERS
* Arquivos para processar as requisições das rotas

<hr>

### Criar pasta de controllers
```
mkdir src/controllers
```

### Criar arquivo controller.js
```
touch src/controllers/controller.js
```

### Criar funções para processar as requisições da rotas

```
function listarDados(request, response) {
    response.send('Retorno de lista de informação do Banco de dados');
}

function gravarDados(request, response) {
    response.send('Método utilizado para salvar informações!');
}

function atualizarDados(request, response) {
    response.send('Método utilizado para editar informações!');
}

function deletarDados(request, response) {
    response.send('Método utilizado para deletar informações!');
}

module.exports = {
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados
}
```

<hr>

## Configurar estrutura de conexão com banco de dados

### Criar pasta 'config' dentro da pasta 'src'
```
mkdir src/config
```
### Criar arquivo 'db.js' dentro da pasta 'congif'
```
touch src/config/db.js
```

### Colar o código no arquivo 'db.js'
```
// Importando o pacote de conexão com banco de dados 
const mysql = require('mysql2');
// Importar  variável de conexão do banco
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect( (err) => {
    if (err) {
        console.log('Erro de conexão: ' + err);
    } else {
        console.log('Mysql Connected!');
    }
});

module.exports = connection;
```

## Criar banco de dados (MySql Workbench)

* Criar database
* Dar um 'use' na database criada
* criar tabelas

### Criar database
```
create database NOME_DATABASE;
```
* CTRL + Enter: executa o comando sql

### Selecionar a database
```
use NOME_DATABASE
```

### Criar tabela alunos
```
create table alunos(
	id int not null auto_increment,
    nome varchar(120) not null,
    dt_nascimento date not null,
    time_do_coracao varchar(120),
	primary key(id)
);
```

### Criar tabela users
```
create table users(
	id int not null auto_increment,
    ds_nome varchar(120),
	primary key(id)
);
```

###