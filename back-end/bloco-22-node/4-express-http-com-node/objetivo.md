# Objetivo
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o *Express*;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar funções que processam requisições HTTP.


## Importância
O protocolo HTTP é a fundação da web moderna. Ele é a base da comunicação de boa parte do que acontece na web e, portanto, entender bem seu funcionamento é essencial para desenvolver boas aplicações web.

Inicialmente criado para transportar documentos e mensagens simples, o HTTP hoje é responsável pelo tráfego de todo tipo de informação na internet. Boa parte do que é enviado e recebido via HTTP são requisições e respostas à APIs HTTP. É sobre essas APIs que você aprenderá hoje.

Inicialmente criado para transportar documentos e mensagens simples, o HTTP hoje é responsável pelo tráfego de todo tipo de informação na internet. Boa parte do que é enviado e recebido via HTTP são requisições e respostas à APIs HTTP

APIs são pontos de comunicação entre dois sistemas diferentes, e APIs HTTP são as mais utilizadas para comunicação na web. Por exemplo, imagine que você precisa que seu Front-End consulte alguns dados do seu banco de dados, como você faria para acessar? Não faz sentido colocar, por exemplo, o usuário e senha do banco no meio do seu JavaScript e criar uma conexão direta, faz? Se você fizer algo do tipo, estaria, dentre outras coisas, expondo o acesso a todo o banco de dados e a qualquer pessoa que executasse um "Inspecionar elemento" na página. Perigoso, não é?

As APIs HTTP formam o Back-End da maioria das aplicações web, são responsáveis por ler os dados no banco e entregá-los para o Front-End, ou por receber dados do Front-End e armazená-los no banco de dados.

Um ponto importante sobre as APIs HTTP é que tudo o que está nelas é reutilizável por qualquer cliente. Se você cria um endpoint para cadastrar pessoas usuárias, por exemplo, todo o Front-End da sua aplicação vai consumir esse mesmo endpoint, não importa em qual aplicação seja usada (web ou mobile).
