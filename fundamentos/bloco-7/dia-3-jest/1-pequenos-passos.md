# TDD - Test Driven Development
**Desenvolvimento orientado a testes**, é uma técnica de desenvolvimento que, em certos cenários, favorece a produtividade e a escrita de códigos confiáveis. Essa técnica é interessante porque ela ajuda a criar uma mente programadora orientada a testes , ainda que nem sempre escrever testes antes de escrever funcionalidades seja a prática mais adequada.

Destrinchando cada etapa, o TDD consiste em:
- Escrever um teste que cubra a função que você pretende implementar antes mesmo de executá-la. Este teste irá falhar - afinal, a sua função ainda não foi declarada. Podemos começar do teste mais elementar possível para esse cenário, como verificar se a função criada existe.
- Implementar apenas o necessário para que o teste passe. No caso do exemplo anterior, só precisaria declarar a função para passar o teste.
- Refatorar o código para que ele esteja bem escrito e fácil de se entender. O pulo do gato nessa etapa é que tehamos um teste já implementado que irá falhar caso você quebre algo ao refatorar o seu código.
- Repetir! Afinal de contas, o desenvolvimento orientado a testes é um ciclo. Volte a etapa 1 e repita esse processo até que todas as funcionalidades da sua função sejam implementadas.
  
Além de ser útil para testar funções puras, outro exemplo prático em que o desenvolvimento orientado a testes pode ser útil é consertar bugs. Os testes ajudam a quebrar problemas complexos em partes menores que podem ser analisadas mais facilmente. 
