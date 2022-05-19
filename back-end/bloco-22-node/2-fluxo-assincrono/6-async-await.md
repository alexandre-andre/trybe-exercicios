# Utilizando async/await
Muitas vezes, queremos somente buscar o resultado sem necessariamente usar uma API de Promises. Para isso contamos com `async/await`. Essas duas palavras-chave foram criadas para trabalhar com Promises como se estivéssemos no método síncrono.

Toda função na qual utilizamos `async`, automaticamente passa a retornar uma *Promise*, que será rejeitada em caso de erro, e resolvida em caso de sucesso.

Quando usamos `async/await` temos como resultado um código com sintaxe quase idêntica à utilizada para código síncrono.

Veja como fica o exemplo anterior que usamos para entender Promise, só que agora utilizando async/await:
```js
const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()
```

Note que para podermos utilizar o `async/await`, precisamos criar uma função **main** e colocar nossa lógica dentro dela. Isso acontece porque, por enquanto, o `await` só pode ser utilizado dentro de funções `async`.

Perceba também que não temos mais nenhum `.then` e que todo o tratamento de erro e sucesso foi feito com um `try ... catch`. Do mesmo modo que fizemos quando estávamos utilizando o `fs.readFileSync`.
