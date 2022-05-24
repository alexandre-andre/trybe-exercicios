# A camada dos Services
À medida que projetos crescem, os `models` tornam-se cada vez maiores e mais complexos, pois passam a acumular mais regras de negócio. Por isso, é comum vermos uma nova camada sendo adicionada em:
- (I) projetos que exigem uma regra de negócio mais complexa;
- (II) APIs.

Essa camada é chamada de `Services` e fica situada entre as camadas de `Controller` e `Model`, sendo a responsável pela nossa regra de negócio.

> Observação: Quando adicionamos uma camada de `Services`, a camada `Model` fica com menos atribuições, ou seja, terá como responsabilidade somente o acesso a dados. Exemplificando: quebramos a camada de modelo em outras duas partes, a de **Controle** e a de **Serviço**.


## Atribuições da camada Services
- Centralizar acesso a dados e funções externas.
  - Exemplo: chamar um evento que dispara uma mensagem no Slack.
- Abstrair regras de negócio complexas do seu modelo;


## O que a camada de serviço `NÃO` deve fazer?
- **Não deve ter nenhum tipo de informação sobre o acesso a camada de dados**.
  - Exemplo: não ter nenhuma query SQL.
- **Não deve receber nada relacionado ao HTTP, seja o `request` ou o `response`**.
- **O `controller` *deve mandar apenas o necessário para o* `service`**.