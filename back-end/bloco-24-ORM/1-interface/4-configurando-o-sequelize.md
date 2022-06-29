# Configurando o Sequelize
1. Instalação do Sequelize
- Para começar a usar o Sequelize, é preciso iniciar uma aplicação `Node.js` e instalar essa biblioteca ORM utilizando os seguintes comandos:
```
mkdir app-with-sequelize && cd app-with-sequelize
npm init -y
npm install sequelize
```

2. O próximo passo para utilizar o Sequelize é instalar um `CLI`, que é responsável por gerar e executar as operações. Além de instalar o CLI, também precisamos instalar o `mysql2`, uma dependência necessária para usarmos o `MySQL` juntamente com o Sequelize.
```
npm install sequelize-cli
npm install mysql2
```

3. Inicialização do Sequelize
- Depois que instalamos o `CLI`, precisamos iniciar um projeto com o Sequelize. Para isso, vamos executar o seguinte comando dentro da pasta raiz:
```
npx sequelize-cli init
```

- Esse comando vai criar as seguintes pastas:
  - `config`: contém um arquivo de configuração, com orientações para o `CLI` se conectar com o nosso banco de dados;
  - `models`: contém todos os modelos da nossa aplicação;
  - `migrations`: contém todos os arquivos de migração da nossa aplicação;
  - `seeders`: contém todos os arquivos de "seeds" (sementes que são usadas para popular o banco).


4. Conexão com o banco de dados
- Agora precisamos configurar o arquivo `config.json` gerado pelo `init` do `CLI`. Ao alterar esse arquivo, estamos configurando o acesso da aplicação ao nosso banco de dados. Vamos modificar somente o objeto `development`, não vamos nos preocupar com os demais:
```json
// config/config.json
{
  "development": {
    "username": "root",
    "password": "",
    "database": "orm_example",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

  // No resto do arquivo você vai encontrar as convenções para conectar o Sequelize em outros ambientes
}
```

- Vamos entender melhor as informações que estamos passando:
  - `Usuário` de acesso ao banco de dados;
  - `Senha` de acesso ao banco de dados;
  - `Nome do banco de dados` no qual queremos conectar;
  - `Host` que estamos conectando - por ser local, utilizamos o `127.0.0.1`;
  - `Dialect`, que se refere a qual banco estamos utilizando. Nesse caso, "mysql".

5. Criação do banco de dados usando o `CLI` do Sequelize
- Agora que iniciamos uma aplicação do Sequelize, podemos criar o banco de dados `orm_example` (que nomeamos no arquivo config.json) através deste comando:
```
npx sequelize db:create
```

No terminal, o Sequelize vai avisar que o `database` foi criado. Você pode verificar isso no próprio MySQL utilizando os comandos abaixo:
```
mysql -u root -p
```

- Digite a senha de acesso ao mysql e em seguida rode o comando abaixo:
```
show databases;
```

A partir desses passos, o banco `orm_example` foi criado e não foi preciso escrever nenhuma linha de SQL para isso. Essa é uma das primeiras vantagens que o Sequelize nos oferece.