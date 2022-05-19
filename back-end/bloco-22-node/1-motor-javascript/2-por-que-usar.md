# Por que usar Node.js?
O uso do Node.js vem crescendo muito nos últimos anos, vide [ModuleCounts.com](https://www.modulecounts.com/).

Ter muitos pacotes publicados no repositório atual nos dá uma ideia de duas grandes vantagens que o Node.js tem sobre tecnologias concorrentes: uma comunidade extremamente ativa e uma grande quantidade de ferramentas para resolver os mais diversos tipos de problema.


## Performance
Quando comparado a outras grandes tecnologias, *o Node.js nos permite escrever softwares servidores de requisições HTTP de forma muito mais eficiente*. Isso se dá pelo fato de que toda leitura e escrita que ele realiza, tanto no disco quanto na rede, é feita de forma *não bloqueante*. Ou seja, quando o servidor recebe uma requisição e precisa, por exemplo, buscar dados no banco de dados, as demais requisições não precisam esperar que a primeira termine para que possam ser atendidas. 
- Resumindo: em outras palavras, o Node.js realiza todas as suas operações de entrada e saída de dados de forma *assíncrona*, utilizando processamento concorrente.

Por serem mais eficientes e otimizadas que outras tecnologias, as aplicações feitas em Node.js acabam por consumir menos recursos dos servidores que as executam, tornando o Node.js uma tecnologia, em geral, mais barata que suas concorrentes. Portanto, uma das principais vantagens do uso do Node.js é a performance.


## Aplicações em tempo real
A natureza não bloqueante do Node.js permite que alguns recursos sejam implementados na plataforma para facilitar o trabalho com operações em tempo real.

Bibliotecas como o [socket.io](https://socket.io/) permitem que, com poucas linhas de código, aplicações em tempo real relativamente complexas sejam criadas por completo.


## Node.js <> JavaScript
Como já falamos antes, o JavaScript tem se mostrado uma linguagem extremamente versátil, estando presente em diversos ambientes, como a Web, Desktop, Mobile, dispositivos IoT (internet das coisas) e até mesmo em aparelhos televisores!


## Node.js é a melhor tecnologia para tudo?
Node.js é a ferramenta ideal para vários tipos de projeto. No entanto, é importante lembrar que não existe bala de prata, ou seja, a solução para todos os problemas, quando o assunto é tecnologia. A melhor ferramenta *sempre* depende do caso de uso e dos recursos disponíveis para desempenhar uma determinada tarefa.
