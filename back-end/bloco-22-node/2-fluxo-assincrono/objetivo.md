# Objetivo
- Realizar operações assíncronas utilizando *callbacks*;
- Realizar operações assíncronas utilizando *Promises*;
- *Ler e escrever* arquivos localmente com Node.js;
- Escrever seus próprios scripts que criam e *consomem Promises*;
- Reescrever código que usa callbacks de modo que passe a *usar Promises*.


## Importância
O JavaScript é uma linguagem single-threaded(executa apenas uma operação de cada vez). Na prática, quando temos uma operação demorada no nosso código, o JavaScript precisa esperar que ela seja concluída para conseguir fazer qualquer outra coisa.

Para o navegador, isso significa travar até mesmo a renderização da tela e deixar o usuário sem ação nenhuma durante todo o tempo que essa operação demorar para ser completada. Já para o servidor, isso resulta em não conseguir processar nenhuma outra requisição até que determinada operação termine.

Sendo assim, para que possamos escrever aplicações com boa performance trazendo uma experiência agradável para o usuário, é importante sabermos como realizar operações demoradas de forma assíncrona. Esse habilidade pode ser, muitas vezes, a diferença entre escrever um código bom e performático e escrever um código que não funciona, ou é extremamente lento.
