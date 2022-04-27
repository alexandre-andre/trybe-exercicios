# Dockerfile comandos adicionais

## LABEL
Com o parâmetro `LABEL` , é possível fazer essas definições em nosso `Dockerfile` .

É recomendado o uso de **labels** para organizar nossas imagens, registrar informações de licenças, anotar relacionamentos entre containers e outros componentes ou qualquer outras informações que façam sentido ao objetivo do container ou sua aplicação.

As informações são registradas seguindo o parâmetro de "chave e valor", e caso uma chave esteja repetida, a última sobrescreverá as anteriores:
```
LABEL <KEY>=<VALUE>
```

É comum registrarmos o "maintener" da imagem, para um possível contato posterior para tirar dúvidas ou sugerir contribuições:
```
LABEL maintener="John Doe <john.doe@trybe.com.br>"
```

Esse valor pode ser resgatado posteriormente através do comando `docker inspect <CONTAINER ID || NAMES>` , onde o valor estará no atributo `Labels` :
```
"Labels": {
   "maintener": "John Doe <john.doe@trybe.com.br>"
}
```


## ENV
Em ambientes de desenvolvimento de apps é muito importante o uso de *Env* ironment Variables, felizmente também podemos utilizá-las em nossos containers.

> Variáveis de ambiente são valores que são definidos dentro do escopo do sistema operacional, ou seja, são valores que estão disponíveis para todas as aplicações que estão instaladas dentro daquele SO .

No `Dockerfile` , podemos definir nossas variáveis durante a criação de nossa imagem utilizando o comando `ENV` :
```
ENV <ENV NAME> <ENV VALUE>
```

Podemos utilizá-la, por exemplo, para setar o ambiente onde vamos rodar o app .
```
ENV NODE_ENV production
```

Ao rodar nossos containers, também podemos passar variáveis, basta utilizar a tag --env ou -e :
```
docker container run \
   --env myCat=fluffy \
   --env myName=johnDoe \
   <IMAGE NAME>
```

Essas sobrescreverão as definidas no Dockerfile caso possuam o mesmo nome.


## USER
Define qual o usuário que irá iniciar nosso app no container .

Caso não seja definido nenhum usuário, o Docker irá utilizar o usuário root como padrão, **o que não é recomendado por motivos de segurança**.

Abaixo temos um exemplo da criação de um usuário com apenas as permissões necessárias em uma imagem ubuntu :
```
FROM ubuntu:8
RUN mkdir /app
RUN groupadd -r node-user && useradd -r -s /bin/false -g node-user node-user
WORKDIR /app
COPY . /app
RUN chown -R node-user:node-user /app
USER node-user
CMD node index.js
```

Normalmente as imagens já possuem um usuário criado para a execução de nossos `apps` .

Por exemplo nas imagens `node` , já possuem um usuário genérico chamado "`node`" com os privilégios necessários, e para usá-lo, basta adicionarmos o usuário ao diretório de nosso projeto e utilizarmos a tag `user` :
```
FROM node:10-alpine
COPY . /app
RUN chown -R node:node /app
USER node
CMD ["node", "index.js"]
```
