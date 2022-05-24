# A camada dos Controllers
São os middlewares!

É por meio dela que os dados da requisição do cliente serão recebidos e tratados, para depois serem passados para as próximas camadas.

O `controller` recebe as requisições feitas à API e então consulta o `service`, enviando na resposta aquilo que o service deve retornar: uma mensagem de erro (em caso de falha) ou as informações pedidas (em caso de sucesso).

> Observação: Ao se comunicar com o `service`, o `controller` não deve passar toda a `request`, apenas só necessário.


