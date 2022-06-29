# Boas Práticas
A boa prática é usar variáveis de ambiente para controlar coisas relacionadas à configuração geral da aplicação no arquivo `config.js`.

1. Vamos fazer a instalação do pacote dotenv:
```
npm install dotenv
```

2. Mudaremos o nome do nosso arquivo config.json para config.js
3. Retiraremos todo o conteúdo de config.js e substituíremos pelo código abaixo:
```js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```

Note que, como estamos em um exercício de desenvolvimento, vamos assumir que os três ambientes vão utilizar o banco de dados local do seu computador. Em aplicações mais complexas, no entanto, é importante que você utilize bancos de dados e configurações diferentes para cada ambiente.

4. Crie o arquivo .env na raiz da sua aplicação e preencha as variáveis com as suas credenciais para acessar o MySQL:
```
MYSQL_USER=root
MYSQL_PASSWORD=senha_mysql
MYSQL_DATABASE=orm_example
HOSTNAME=localhost
```

5. Modifique a linha 8 do arquivo models/index.js para apontar para o arquivo config.js:
```
const config = require(__dirname + '/../config/config.json')[env]; // configuração antiga
const config = require(__dirname + '/../config/config.js')[env];   // configuração nova
```