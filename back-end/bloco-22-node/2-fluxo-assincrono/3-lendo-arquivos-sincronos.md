# Lendo arquivos com métodos síncronos
Se quisermos ler um arquivo de maneira **assíncrona**, o Javascript não vai esperar o arquivo inteiro ser lido para só então dar continuidade ao script. Porém, se quisermos esse comportamento de pausa, precisamos de um método **síncrono**.

O método disponibilizado pelo módulo `fs` para leitura síncrona de arquivos é o `fs.readFileSync`. Vamos utilizá-lo no exemplo a seguir, mas antes devemos realizar os seguintes passos:
1. Abrir uma pasta para nosso projeto, chamada `io-local`
2. Iniciar o nosso projeto Node.js usando o comando `npm init`
3. Criar um arquivo chamado `readFileSync.js`
4. Escrever o seguinte código dentro do arquivo:
```js
// io-local/readFileSync.js
const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}
```
5. Importar o módulo `fs` e criar uma variável chamada `nomeDoArquivo`, contendo o nome (fixo) do arquivo que vamos ler
6. Chamar o método `fs.readFileSync`.
7. Rodar o script com `node readFileSync.js`.

Isso vai gerar um erro porque estamos tentando ler um arquivo que não existe!

Continue a leitura para descobrir como solucionar esse problema.


## Método `fs.readFileSync`
Responsável por *ler* arquivos e trazer seu conteúdo para dentro do Node.js. Por ser síncrono, ele espera a leitura do arquivo terminar para, só então, atribuir o resultado à constante `data`.

O método `readFileSync` recebe dois parâmetros:
- nome do arquivo
- Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo.

Mas e se ocorrer um erro na leitura do arquivo?

Com funções síncronas, como `readFileSync`, você deve tratar explicitamente os erros que puderem acontecer.

No código que você escreveu dentro do arquivo, anteriormente no passo a passo, usamos um bloco `try...catch` para capturar quaisquer erros que possam acontecer durante a leitura do arquivo e imprimimos uma mensagem para o usuário no terminal.

Agora vamos resolver o probleminha que estamos tendo ao tentar ler o arquivo!

Nota: Antes de continuar, não se esqueça de criar um arquivo `meu-arquivo.txt` com algum conteúdo dentro!

Ao rodar o *script* `readFileSync.js` com o comando node `readFileSync.js`, você deverá ver o conteúdo do seu arquivo impresso no terminal.

Se tivéssemos que ler vários arquivos ao mesmo tempo?

Para isso, utilizamos um método **assíncrono**.