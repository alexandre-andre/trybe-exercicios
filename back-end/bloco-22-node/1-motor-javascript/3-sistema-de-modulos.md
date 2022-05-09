# Sistema de módulos
Uma das maiores vantagens do *Node.js* é a grande quantidade de pacotes e bibliotecas disponíveis publicamente no npm. Agora chegou a hora de aprendermos o que é um pacote Node e como podemos utilizá-los no nosso código.

Um módulo é um "pedaço de código" que pode ser organizado em um ou mais arquivos, e que possui escopo próprio, ou seja, suas *variáveis*, *funções*, *classes* e afins só estão disponíveis nos arquivos que fazem parte daquele módulo.

> Um módulo é uma funcionalidade, ou um conjunto de funcionalidades, que se encontram isoladas do restante do código. *O Node.js possui três tipos de módulos*: **internos**, **locais** e de **terceiros**.


## Módulos internos
Os módulos internos (*core modules*) são inclusos no Node.js e instalados junto com ele quando baixamos o runtime. Alguns exemplos de core modules são:
- [fs](https://nodejs.org/api/fs.html): fornece uma API para interagir com o sistema de arquivos de forma geral;
- [url](https://nodejs.org/api/url.html): provê utilitários para ler e manipular URLs;
- [querystring](https://nodejs.org/api/querystring.html): disponibiliza ferramentas para leitura e manipulação de parâmetros de URLs;
- [util](https://nodejs.org/api/util.html): oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.
- [os](https://nodejs.org/api/os.html): oferece ferramentas e funcionalidades relacionadas ao sistema operacional.


## Módulos locais
Os módulos locais são aqueles *definidos juntamente à aplicação*. Representam *funcionalidades* ou *partes do programa* que foram separados em arquivos diferentes. Eles podem ser publicados no NPM para que outras pessoas possam baixá-los e utilizá-los, o que nos leva ao nosso próximo e último tipo de módulo.


## Módulos de terceiros
Os módulos de terceiros são aqueles *criados por outras pessoas e disponibilizados para uso* através do npm. Conforme mencionado, nós também podemos criar e publicar nossos próprios módulos, seja para utilizarmos em diversas aplicações diferentes, seja para permitir que outras pessoas os utilizem. Veremos como fazer isso ainda hoje.


### Recapitulando
- Módulos são "caixinhas" que isolam suas funções, variáveis e afins de outras partes do código; eles podem ser internos (que vêm com o Node.js), locais (criados por nós na nossa máquina) ou de terceiros (baixados do NPM).
- O NPM é o site em que publicamos nossos pacotes e npm é a ferramenta de linha de comando que realiza o gerenciamento desses pacotes pra nós.


## Maneiras de importar e exportar módulos
Quando queremos utilizar o conteúdo de um módulo ou pacote de outro arquivo no Node.js, precisamos importar esse módulo/pacote para o contexto atual no qual estamos.

Existem dois sistemas de módulos difundidos na comunidade JavaScript:
- Módulos **ES6**;
- Módulos **CommonJS**.


### ES6
Na especificação do ECMAScript 6 (que é a especificação seguida pelo JavaScript), os módulos são importados utilizando a palavra-chave `import`, tendo como contrapartida a palavra-chave `export` para exportá-los.

O Node.js não possui suporte a módulos ES6 por padrão, sendo necessário o uso de transpiladores para que esse recurso esteja disponível, como o [Babel](https://babeljs.io/), ou supersets da linguagem, como o [TypeScript](https://www.typescriptlang.org/).
- *Transpiladores* são ferramentas que leem o código-fonte escrito em uma linguagem como o Node.js e produzem o código equivalente em outra linguagem.
- *Supersets* são linguagens que utilizam um transpilador para adicionar novas funcionalidades ao JavaScript.

### CommonJS
O CommonJS é o sistema de módulos implementado pelo Node.js nativamente e, portanto, o sistema que utilizaremos daqui pra frente.



