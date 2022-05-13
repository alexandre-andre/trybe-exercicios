# Criando uma aplicação com Express
```
mkdir hello-express
cd hello-express
npm init -y
```

Agora, instale o *Express* e crie um arquivo *index.js*. Como qualquer aplicação *Node.js*, nossa API precisa de um entrypoint, por convenção, vamos utilizar o `index.js`.
```
npm i express
touch index.js
```

Já temos o que é necessário para criar a API HTTP com o Express.
```js
// hello-espress/index.js
const express = require('express'); // importa express
const app = express(); // 1 inicia a funcao express

app.get('/hello', handleHelloWorldRequest); // 2 pega a rota /hello e chama a funcao handleHelloWorldRequest

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Aplicação ouvindo a porta ${PORT}`);
}); // 3

function handleHelloWorldRequest(req, res) { // funcao que trata req e res
  res.status(200).send('Hello World'); // 4
}
```

Esse pequeno script é o suficiente para:
1. Criar uma nova aplicação *Express*;
2. Dizer ao *Express* que, quando uma requisição com método `GET` for recebida no caminho `/hello`, a função `handleHelloWorldRequest` deve ser chamada;
3. Pedir ao *Express* que crie um servidor *HTTP* e escute por requisições na porta *3001*;
4. Ao tratar uma requisição com método `GET` no caminho `/hello`, enviar o `status HTTP 200` que significa `OK` e a mensagem '`Hello World!`'.

Para iniciar a aplicação, execute o comando abaixo no diretório da aplicação.
```
node index.js
```

Agora, vá até o navegador e abra a url http://localhost:3001/hello. Pronto, aplicação node com Express criada com sucesso!
