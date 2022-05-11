# Isolando nossos testes
Antes de continuar, precisamos ter atenção a um ponto: nossos testes não devem realizar operações de IO (input / output), ou seja, não devem acessar nem o disco, nem a rede.

Quando criamos aplicações de front-end, estamos na maior parte do tempo manipulando o DOM. Quando falamos de javascript no backend com Node.js, constantemente estamos realizando operações com IO, ou seja, nossa aplicação se comunica com o sistema de arquivos ou com a rede. Exemplos dessas comunicações são a leitura e escrita de arquivos, chamadas a APIs ou consultas em um banco de dados.

Sendo assim, ao escrever testes, será muito comum precisarmos testar códigos que fazem esse tipo de operação de **integração**, o que pode adicionar complexidade aos nossos testes.

Vejamos o exemplo que estamos construíndo: para garantir nossos cenários, precisaríamos, além de criar o teste e realizar a chamada à nossa função **leArquivo**, preparar um arquivo para ser lido com o conteúdo que esperamos ler.

Pode parecer simples, mas por exemplo, para testar uma função que acessa um banco de dados, precisaríamos disponibilizar uma instância desse banco de dados para que nossos testes se conectassem, e precisaríamos garantir que existissem registros com as diversas situações que nossos testes precisassem testar. Além disso, após a execução dos nossos testes, tais registros provavelmente teriam sido alterados e teríamos que garantir que voltassem ao estado inicial para podermos executar nosso teste novamente.

Dessa forma, o ideal é não permitir que nosso código realize essas operações de IO de fato, mas apenas simular que elas estão sendo realizadas. Dessa forma, **isolamos o IO** de nossos testes, garantindo que um banco de dados inconsistente ou um arquivo faltando na hora de executar os testes não faça com que tudo vá por água abaixo

Para isso existe o conceito de `Test Doubles`, que são objetos que fingem ser o outro objeto para fins de testes.

Com esses objetos, podemos simular, por exemplo, as funções do módulo `fs`. Nosso código irá pensar que está chamando as funções do `fs`, porém, estará chamando as nossas funções, que se comportarão da maneira que queremos, mas sem a necessidade de escrever, ler ou ter dependência de arquivo reais.

Para isso usaremos a ferramenta `sinon`.
