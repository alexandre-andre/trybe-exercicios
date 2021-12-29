# Jest - Introdução

"Por que precisamos de um framework ? Não dá pra escrever todos os testes somente com asserts simples? "
Em teoria, sim, mas à medida que as aplicações vão crescendo esse processo torna-se inviável, pelos seguintes motivos:
- Sua aplicação terá várias funções, provavelmente distribuídas por vários arquivos. Colocar todos os testes em um único arquivo torna-se impraticável rapidamente. Não é possível saber onde começam e onde terminam os testes de uma função. Mesmo em uma função mais complexa, você pode querer separar e agrupar testes relacionados;
- `Node.js` só executa um arquivo por vez, com o comando node *<nome_do_arquivo>* . Se há vários arquivos de teste, é preciso executar um por vez ou escrever um script `shell` para executar todos os arquivos;
- Você sempre precisa executar *todos* os testes de um arquivo. Não há como executar apenas um subgrupo dos testes presentes no arquivo;
- Sempre que um teste falha, a execução é interrompida imediatamente. Isso dificulta saber se os testes posteriores estão corretos, necessitando garantir que todos os testes anteriores estejam corretos;
- Vários testes podem requerer que os mesmos passos sejam executados antes ou após a execução, resultando em muita duplicação;
- Para pular ou desabilitar um teste falhando, é preciso removê-lo ou comentá-lo;
- Não há informações sobre a cobertura de testes. Ou seja, quais partes do código estão sendo estressadas pelos testes e quais não estão;

**Para o mercado de trabalho, o `assert` é insuficiente**.
Um framework de testes apresenta ferramentas para eliminar ou mitigar esses problemas. Existem várias ferramentas semelhantes, como 
- Jest 
- Mocha e 
- Jasmine .
   Entre eles, Jest se destaca por alguns motivos:
- é de fácil instalação e zero configuração.
- é rápido
- integra bem ao **React**. De fato, já vem instalado nele.