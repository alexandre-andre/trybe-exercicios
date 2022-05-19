# Implementação
```js
// io-test/leArquivo.js
const fs = require('fs');

function leArquivo(nomeDoArquivo) {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');

    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}

module.exports = leArquivo;
```

Após a implementação desse código um dos testes já passa ser executado com sucesso:
