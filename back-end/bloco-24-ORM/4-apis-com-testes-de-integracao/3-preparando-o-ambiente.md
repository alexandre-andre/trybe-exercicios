# Preparando o ambiente
Estruturação e instalação dos pacotes necessários
Após clonar o projeto e criar sua branch, adicione na raiz do projeto, uma nova pasta tests, aqui você deve ter uma estrutura parecida com essa:
```
.
├── api
│   └── *
├── assets
│   └── *
├── config
│   └── *
├── controllers
│   └── *
├── migrations
│   └── *
├── models
│   └── *
├── node_modules
│   └── *
├── package.json
├── package-lock.json
├── README.md
├── seeders
│   └── *
└── tests
```


Em seguida, faça a instalação dos pacotes para utilizarmos em ambiente de desenvolvimento e realizarmos testes:
```
npm i -D mocha chai sinon
```


Também é necessário a inicialização de um script de testes no package.json:
```json
...
"scripts": {
    ...
    "test": "mocha ./tests/**/*$NAME*.test.js --exit",
},
...
```
