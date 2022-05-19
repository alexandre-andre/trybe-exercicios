# TDD - Transformando requisitos em testes
A prática do TDD em começar a escrever os testes que traduzem e validam os comportamentos esperados para aquele código antes de começar a implementação.

A ideia principal é começarmos escrevendo o código pensando em como será testado, ou seja, ter em mente quais os cenários cobrir e também como nosso código precisa estar estruturado para que possamos testá-lo. Códigos menos estruturados normalmente são mais difíceis de serem testados.

Dessa forma, como podemos estruturar o TDD em passos:
1. Antes de qualquer coisa, precisamos interpretar os requisitos, pensando nos comportamentos que iremos implementar e na estrutura do código: se será uma função, um módulo, quais os inputs, os outputs, etc..

2. Item 1 em mente, começamos a escrever os testes, ou seja, criamos a estrutura de `describes` e `its` que vimos.

3. Depois, escrevemos as asserções. Perceba que antes mesmo de ter qualquer código, já iremos criar chamadas a esse código, o que significa que nossos testes irão falhar. Não se preocupe, pois essa é exatamente a ideia nesse momento.

4. Agora que já temos os testes criados, vamos à implementação do nosso código. A ideia é escrever os códigos pensando nos testes e, conforme vamos cobrindo os cenários, nossos testes que antes quebravam começam a passar.

Se precisar fazer algum ajuste nos testes em algum momento, não se preocupe! Isso é perfeitamente normal, visto que estamos escrevendo testes para código que ainda não existe, e um detalhe ou outro pode escapulir à mente.

