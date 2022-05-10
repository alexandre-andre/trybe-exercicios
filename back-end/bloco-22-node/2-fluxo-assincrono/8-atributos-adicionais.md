# Atributos adicionais na utilização de métodos de leitura e escrita no `fs`
No `writeFile`, assim como ocorre no `readFile`, você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro opcional em seus métodos.

A opção `flag` especifica como o arquivo deve ser aberto e manipulado. O padrão é `'w'`, que especifica que o arquivo deve ser aberto para escrita.

Observação: Se o arquivo não existir, ele é criado. Caso contrário, é reescrito, ou seja, tem seu conteúdo apagado antes de o novo conteúdo ser escrito. A flag `'wx'`, por exemplo, funciona como `'w'`, mas lança um erro caso o arquivo já exista:
```js
const fs = require('fs').promises;

 > A flag ``´wx`` abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado:

fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error('err');
  });
```

Note que quando rodamos o código com a flag `wx`, tentando escrever no arquivo `meu-arquivo.txt`, é gerado o seguinte erro:
```js
[...]
[Error: EEXIST: file already exists, open './meu-arquivo.txt'] {
  errno: -17,
  code: 'EEXIST',
  syscall: 'open',
  path: './meu-arquivo.txt'
}
```

No código, mude o nome do arquivo para `meu-novo-arquivo.txt` e rode novamente o script com `node writeFileSync.js`. Repare que foi criado um novo arquivo com o nome que utilizamos e com o conteúdo: `Eu estive aqui :eyes:`.

Saiba mais sobre as flags disponíveis: [aqui](https://nodejs.org/api/fs.html#fs_file_system_flags).
