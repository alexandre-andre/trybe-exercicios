Realize a instalação das dependências
```
npm install
```

Instale os pacotes utilizados:
```
npm install body-parser express mysql2
```

Instale também os pacotes de desenvolvimento:
```
npm install -D mocha chai sinon
```

Adicione o script para rodar os testes no package.json, dentro de "scripts":
```
"test": "mocha tests --recursive --exit"
```

Rodando os testes:
```
npm test
```

Para subir a aplicação, é necessário ter o MySQL rodando em sua máquina (Relembre em 21.1 - Introdução à SQL). Feito isso, é possível executá-la.
```
node index.js
```
