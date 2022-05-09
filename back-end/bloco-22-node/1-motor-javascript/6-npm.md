# NPM
[Cheat Sheet](https://github.com/tryber/Trybe-CheatSheets/blob/master/backend/nodejs/npm/README.md)

O NPM (Node Package Manager) é o repositório oficial para publicação de pacotes Node.js. É para ele que realizamos upload dos arquivos de nosso pacote quando queremos disponibilizá-lo para uso de outras pessoas ou em diversos projetos. Atualmente, uma média de 659 pacotes são publicados no NPM todos os dias, segundo o site ModuleCounts.com

Um pacote é um conjunto de arquivos que exportam um ou mais módulos Node. Nem todo pacote Node é uma biblioteca, visto que uma API desenvolvida em Node também tem um pacote.


## Utilizando o CLI npm
O `CLI do npm` é uma ferramenta oficial que nos auxilia no gerenciamento de pacotes, sejam eles dependências da nossa aplicação ou nossos próprios pacotes. É através dele que criamos um projeto, instalamos e removemos pacotes, publicamos e gerenciamos versões dos nossos próprios pacotes. Publicar um pacote público no npm é gratuito e não há um limite de pacotes que se pode publicar. No entanto, existem taxas de assinaturas caso desejemos hospedar pacotes de forma privada, ou seja, pacotes sob os quais só nós temos o controle de acesso.


### npm init
- Permite criar de forma rápida e simplificada um novo pacote Node.js na pasta onde é executado.
- o comando pede para quem executou algumas informações sobre o pacote como nome, versão, nome das pessoas autoras e afins
- cria um arquivo package.json


### npm init -y
- Permite criar um npm init com seus valores default

Package.json é o arquivo com as respostas das perguntas realizadas e mais alguns campos de metadados. Para o Node.js, qualquer pasta contendo um arquivo package.json válido é um pacote.

Dentro do package.json é onde podemos realizar algumas configurações importantes para o nosso pacote como nome, versão, dependências e scripts.


### npm run
- executa um determinado script configurado no package.json.
   - Scripts são "atalhos" que podemos definir para executar determinadas tarefas relacionadas ao pacote atual.
   - Para criar um script é precisamos alterar o package.json e adicionar uma nova chave ao objeto scripts. O valor dessa chave deve ser o comando que desejamos que seja executado quando chamarmos aquele script.

Ex: um script chamado **lint** que execute a ferramenta de linter, o ESLint, nossa chave scripts fica assim:
```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```
> ⚠️Importante: `lint` é o *nome do script* que digitamos no terminal para executar o ESLint na pasta atual.

Agora, com um script criado, podemos utilizar o comando npm run <nome do script> para executá-lo. No nosso caso, o nome do script é lint, então o comando completo fica assim:
```
npm run lint
```

Podemos criar quantos scripts quisermos. Inclusive, pode criar scripts que chamam outros scripts, criando assim "*pipelines*". Isso é muito útil, por exemplo, quando trabalhamos *supersets* do `JavaScript` como o `TypeScript`, ou *transpiladores* como o `Babel`, pois ambos exigem que executemos comandos adicionais antes de iniciar nossos pacotes.


### npm start
- `npm run start`, sua função é executar o script *start* definido no **package.json**.

Como convenção, todo pacote que pode ser executado pelo terminal (como CLIs, APIs e afins) deve ter um script start com o comando necessário para executar a aplicação principal daquele pacote.

Por exemplo, se tivermos um pacote que calcula o IMC (Índice de Massa Corporal) de uma pessoa cujo código está no arquivo imc.js, é comum criarmos o seguinte script:
```json
{
  // ...
  "scripts": {
    "start": "node imc.js"
  }
  // ...
}
// Dessa forma, qualquer pessoa que for utilizar o script vai ter certeza de como inicializá-lo, pois só vai precisar executar npm start.
```


### npm install
- responsável por baixar e instalar pacotes Node.js do NPM
- `npm install <nome do pacote>`: baixa o pacote do registro do NPM e o adiciona ao objeto `dependencies` do `package.json`;
- `npm install -D <nome do pacote>`: baixa o pacote do registro do NPM, porém o adiciona ao objeto devDependencies do package.json, indicando que o pacote em questão não é necessário para executar a aplicação. Ele é necessário para desenvolvimento.
- `npm install`: baixa e instala todos os pacotes listados nos objetos de `dependencies` e `devDependencies` do *package.json*. Sempre deve ser executado ao clonar o repositório de um pacote para garantir que todas as dependências desse pacote estão instaladas.
