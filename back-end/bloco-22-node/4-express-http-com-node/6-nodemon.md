# Nodemon
Para que as modificações no código reflitam na API em execução, é preciso parar e reiniciar a aplicação, executando novamente o `node index.js`. Faça um teste: deixe sua aplicação rodando e modifique o código da rota `/hello` para ficar assim:
```js
function handleHelloWorldRequest(req, res) {
  res.status(200).send('Olá mundo!');
}
```

Ao abir o navegador e fazer uma requisição novamente para a URL http://localhost:3001/hello, vamos perceber que o código continua retornando a mensagem '`Hello World!`'. Para que a mudança seja aplicada, devemos parar a aplicação (`CTRL+C`) e iniciá-la novamente.

Para facilitar o fluxo de desenvolvimento podemos utilizar um pacote chamado `Nodemon`, que reinicia a aplicação toda vez que editamos e salvamos os arquivos. Para  instalar o `Nodemon`:
```
npm i nodemon -D
```

Quando passamos o parâmetro `-D` ele indica ao `npm` que esse pacote deve ser instalado como uma **dependência de desenvolvimento**. Por enquanto, não precisamos nos preocupar com o que isso significa. Para poder automatizar o uso do nodemon, vamos abrir nosso arquivo package.json e adicionar a seguinte linha:
```json
//...
// "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
		"dev": "nodemon index.js"
//  },
// ...
```

Agora, para executarmos a aplicação, vamos utilizar o seguinte comando:
```
npm run dev
```

Pronto! Sempre que fizermos qualquer alteração no código e salvar o arquivo, o Nodemon automaticamente reinicia a aplicação para incluir as modificações.

⚠️ Atenção ⚠️ Apesar de ser uma ferramenta muito útil para desenvolvimento, o Nodemon não deve ser utilizado para rodar a aplicação, pois caso seja disponibilizada para o usuário final pode-se ter problemas de reinicialização da aplicação. Isso ocorre devido ao fato de que qualquer alteração em qualquer arquivo afete a aplicação, fazendo com que toda ela seja reiniciada. 
> Para executar uma aplicação em produção, deve-se utilizar o script start com o comando node index.js.
