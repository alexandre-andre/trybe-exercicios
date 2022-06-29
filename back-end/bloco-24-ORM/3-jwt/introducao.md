# Objetivo
- Entender o que há por dentro de um token de autenticação e autorização;
- Gerar tokens a partir de informações como login e senha;
- Autenticar pessoas usuárias utilizando o token JWT.
- Autorizar o acesso a rotas do Express, usando o token JWT.

# Por que isso é importante?
O JWT é, definitivamente, uma maneira inteligente de obter a identidade de um usuário com segurança!

Imagine que você tem uma aplicação em que você precisa verificar se a sessão de uma pessoa ainda está ativa, mesmo depois de ela ter desligado o computador/smartphone. E aí, como faz?

Você poderia usar cookies. Atualmente, porém, usar cookies não é uma boa opção por várias razões:
- O usuário pode não aceitar seus cookies;
- Você não tem controle de onde ele está rodando;
- O site fica mais pesado dependendo de qual cookie você está usando, etc.

Uma alternativa é usar o JWT, que disponibiliza um token/hash/código criptografado que podemos enviar para uma API e validá-lo como preferirmos.

Além disso, essa tecnologia nos traz outros benefícios:

Não utiliza banco de dados: Usar o JWT implica menos consultas ao banco de dados, o que nos dá um tempo de resposta menor. Caso você esteja usando serviços pagos que cobram por consulta, como o DynamoDB, o JWT poderá reduzir os custos de consumo.

Mais simples de usar: Se o projeto não tem uma arquitetura boa para administrar as sessões dos seus clientes, e seus princípios básicos de segurança não forem claros, o desenvolvimento usando JWT será bem mais rápido – considerando que podemos simplesmente usar alguma biblioteca existente.

Utilizado em vários serviços: Podemos ter um servidor de autenticação que lida com o login/cadastro para gerar o token para a pessoa usuária. A partir daí, podemos transitar o token entre várias aplicações, sendo necessário logar apenas uma vez e logo depois estar logado em todas as outras aplicações do sistema. No Google, por exemplo, você loga uma única vez e pode usar serviços como Google Drive, Gmail, Google Docs, Google Fotos, etc. sem precisar logar novamente.
