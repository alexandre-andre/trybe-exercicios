# Model e testes
Pensando de maneira sequencial, a camada `MODEL` fica em uma das pontas da arquitetura e, por isso, é uma boa alternativa começar por ela. Entretanto é importante ter em mente que, por se tratar de testes unitários, testar uma unidade específica do código isolado. Sendo assim, podería iniciar por qualquer parte.

Seguindo o TDD, o primeiro passo é escrever os casos de testes. Para isso, precisamos nos perguntar o que iremos testar, ou seja, qual a responsabilidade que queremos garantir que está sendo realizada.

> o **model é responsável pela estrutura dos dados e seu armazenamento**.

Sendo assim, iremos testar se essa comunicação com o BD e suas operações de escrita e leitura estão sendo realizadas da maneira correta.
