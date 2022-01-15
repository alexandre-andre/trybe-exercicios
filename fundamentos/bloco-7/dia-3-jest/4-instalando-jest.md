# Instalando o Jest
1. Para começar a instalar o Jest, você precisa ter o npm instalado e funcionando corretamente
```
npm -v
```

2. Caso ele retorne um erro dizendo que não encontrou o comando você deverá executar a instalação do npm , descrita abaixo:
a. primeiro vamos atuaizar a lista de repositórios
```
sudo apt get update
```

b. após atualizar, instalar o npm
```
sudo apt install npm
```

3. Agora vamos simular a criação de um projeto que utilizará a biblioteca do Jest para os testes. Com o npm devidamente instalado e verificado, crie uma pasta e entre nesta nova pasta que você criou.
```
mkdir my_new_project
cd my_new_project
```
> Obs: É importante criar esta nova pasta para cada um dos projetos, pois além de ficar mais organizado, vai evitar que as configurações de um projeto interfiram com outro, visto que o processo de instalação irá criar arquivos e pastas.

a. Após entrar na pasta, precisamos criar um novo `package.json` para o seu novo projeto.
> O `package.json` é responsável por armazenar e descrever diversas informações do projeto, como a versão do node e do npm utilizadas, url do repositório, versão do projeto, dependências de produção e de desenvolvimento.

Para criar o `package.json` no projeto:
```
npm init -y
```

O retorno será:
```
Wrote to /home/cleyton/Documents/meuApp/package.json:

{
  "name": "meuApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

- A primeira chave "name", por padrão, terá o mesmo nome do diretório em que o arquivo package.json foi criado. Ele representa o nome do projeto;
- A versão atual do projeto é "1.0.0", ou seja a primeira versão;
- Podemos adicionar alguma descrição na chave "description";
- A chave "scripts" define um conjunto de scripts Node que podem ser executados.

b. Editando o `package.json`. 
Na chave "test" em "script" temos a seguinte informação: `"test": "echo \"Error: no test specified\" && exit 1"`. Isso significa que a aplicação ainda não possui um script que defina como lidar com testes. Então vamos trocar essa informação por `"test": "jest"` e salvar. Após a alteração teremos algo parecido com:
```
{
  "name": "meuApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

4. Finalmente... instalar o `Jest`, dentro da pasta criada no passo 3
```
npm install --save-dev jest
```

Após rodar esse comando, vamos ver uma alteração importante que ocorreu no arquivo package.json . Para isso vamos abrir a pasta que você criou no seu VsCode com o comando abaixo:
```
code .
```

A pasta agora contém dois arquivos, o `package.json` e o `package-lock.json` e um novo diretório chamado `node modules`, estes últimos dois foram criados após você executar o comando npm `install --save-dev jest`. Ao abrirmos o arquivo `package.json`, veremos algo do tipo:
```
{
  "name": "meuApp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^27.0.6"
  }
}
```

Perceba que agora nosso arquivo package.json possui uma nova chave, "devDependencies" contendo o jest e a versão que está sendo utilizada neste projeto.

`devDependencies` define os pacotes instalados no projeto como dependências de desenvolvimento. Ou seja, são pacotes que serão importantes apenas para o desenvolvimento do projeto. Existe também uma chave chamada "dependencies", que, diferente da primeira, lista os pacotes instalados como dependências de produção.

- `node_modules` é a pasta que guarda todos os arquivos baixados das dependências instaladas.
- `packsge-lock.json` é um arquivo que “trava” as versões das dependências. Quando outra pessoa executar `npm install` ou `npm i` para baixar as dependências, este arquivo garante que serão instaladas as mesmas versões para todo mundo.

É considerado uma boa prática no desenvolvimento, inserir a pasta node_modules em um arquivo .gitignore em todo projeto criado.


### Testanto
Para testar, vamos criar um arquivo chamado sum.test.js e colar o código abaixo dentro dele:
```
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
```

Depois disso, vamos até o terminal digitar `npm test` , se você receber uma resposta parecida com a resposta abaixo, tudo certo com a instalação!

Caso não apareça uma saída de teste, tente rever os passos, observe se você entrou na nova pasta que criou, verifique se não há a pasta node_modules já instalada na sua home ou pasta raiz, averigue o arquivo exemplo e o nome do arquivo, caso ele não tenha o .test ou .spec no nome, o Jest não tenta ler o arquivo, porque não reconhece como um arquivo de teste