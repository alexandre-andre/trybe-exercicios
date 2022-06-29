# Guia comandos iniciais
1. Crie uma nova pasta e inicie um projeto com Express:
```
npm init -y
npm install express
```

2. Crie o arquivo index.js;
3. Instale o pacote sequelize e o mysql2:
```
npm install sequelize mysql2
```

4. Instale o pacote sequelize-cli como uma dependência de desenvolvimento:
```
npm install --save-dev sequelize-cli
```

5. Use o Sequelize-CLI para iniciar a configuração do ORM:
```
npx sequelize-cli init
```

Esse comando vai gerar as pastas `models`, `seeder`, `config` e `migration`.

Garanta que tem um servidor MySQL rodando e coloque todas as configurações de acesso dentro do arquivo `config/config.js`.

Crie o arquivo `index.js` com a estrutra básica de uma API com Express.
```js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
```
