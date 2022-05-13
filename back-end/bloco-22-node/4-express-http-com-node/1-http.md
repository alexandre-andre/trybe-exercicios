# HTTP
Vamos relembrar o que compõe uma requisição HTTP. Para isso, analisaremos a requisição que é feita pelo navegador quando abrimos a página https://developer.mozilla.org.
```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept: text/html
```

Vejamos quais são as informações presentes nessa requisição:
- O método HTTP. Nesse caso, utilizamos o *GET*, que normalmente é utilizado para "buscar" algo do servidor, e é também o método padrão executado por navegadores quando acessamos uma URL.
- O caminho, no servidor, do recurso que estamos tentando acessar. Nesse caso, o caminho é */*, pois estamos acessando a página inicial;
- A versão do protocolo (*1.1* é a versão nesse exemplo);
- O local (*host*) onde está o recurso que se está tentando acessar, ou seja, a URL ou o endereço IP servidor. Nesse caso, utilizamos developer.mozilla.org, mas poderia ser localhost:3000, caso você esteja trabalhando localmente.
- Os headers. São informações adicionais a respeito de uma requisição ou de uma resposta. Eles podem ser enviados do cliente para o servidor, ou vice-versa. Na requisição de exemplo, temos o **header Host**, que *informa o endereço do servidor*, e o **header Accept**, que *informa o tipo de resposta que esperamos do servidor*. Um outro exemplo bem comum são os tokens de autenticação, em que o cliente informa ao servidor quem está tentando acessar aquele recurso: Authorization: Bearer {token-aqui}. Alguns exemplos extras de headers podem ser vistos [aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers).

Esses são os dados transmitidos em uma request do tipo `GET`. No entanto, o `GET` não é o único método **HTTP** existente. Na verdade, existem 39 métodos diferentes! *Os mais comuns são: `GET`, `PUT`, `POST`, `DELETE` e `PATCH`, além do método OPTIONS*, utilizado por clientes para entender como deve ser realizada a comunicação com o servidor.

Além da diferença de significado, requisições do tipo `POST`, `PUT` e `PATCH` carregam mais uma informação para o *servidor: o corpo, ou body*. É no corpo da requisição que as informações são transmitidas, como por exemplo, a de um formulário.
Quando um servidor recebe uma requisição, ele envia de volta uma resposta. Exemplo:
```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (aqui vêm os 29769 bytes da página solicitada)
```

Composição:
- A *versão do protocolo* (*1.1*);
- O *código do status*, que diz se a requisição foi um sucesso ou não (nesse caso, deu certo, pois recebemos um código 200), acompanhado de uma pequena mensagem descritiva (OK, nesse caso);
- Os *Headers*, no mesmo esquema da requisição.O *Content-Type* diz para o navegador o que ele precisa fazer. No caso do HTML, ele deve renderizar o documento na página;
- Um *body*, que é opcional. Por exemplo, caso você submeta um formulário registrando um pedido em uma loja virtual, no corpo da resposta pode ser retornado o número do pedido ou algo do tipo.

Após a resposta, a conexão com o servidor é fechada ou guardada para futuras requisições (seu navegador faz essa parte por você).

Note que tanto requisições quanto respostas podem ter headers e um body. No entanto, é importante não confundir uma coisa com a outra: o body e os headers da *requisição* representam a informação que o *cliente está enviando para o servidor*. Por outro lado, o body e os headers da *resposta* representam a informação que o *servidor está devolvendo para o cliente*.
