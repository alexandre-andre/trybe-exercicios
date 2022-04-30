# Mapeamento de Portas
Para começarmos, rode o seguinte comando para baixar a imagem do servidor:
parâmetro `-P` é utilizado para que o Docker faça um **mapeamento de portas automático** para acesso ao container.
```
docker run -d -P httpd:2.4
```


A imagem será baixada e poderemos ver a instalação da imagem com suas respectivas camadas que citamos anteriormente:
```
Unable to find image 'httpd:2.4' locally
4: Pulling from library/httpd
ac1a72c06a: Pull complete
bfe7b4bf0: Pull complete
afd2f9c4a94: Pull complete
fc9247a27: Pull complete
a9b714c567d8: Pull complete
Digest: sha256:307e3a2f43cd2c58ac37a093dd9adfc2598d00ca4cc0dd978cb1a56ccad4a39f
Status: Downloaded newer image for httpd:2.4
f9f61da552b994f39fb4e363f6e0ca295c77f6944e923871671e2b11ab93f05a
```

Se rodarmos o comando docker ps , podemos perceber o seguinte na coluna PORTS:
```
CONTAINER ID   IMAGE       COMMAND              CREATED         STATUS         PORTS                                     NAMES
f9f61da552b9   httpd:2.4   "httpd-foreground"   4 minutes ago   Up 4 minutes   0.0.0.0:55000->80/tcp, :::55000->80/tcp   brave_maxwell
```

Servidores http necessitam de uma porta de acesso . No caso, é possível ver que ocorreu um mapeamento automático da porta padrão do container `Apache` (*porta 80*), para uma das portas do nosso sistema hospedeiro (aqui esse valor foi *55000*)*.

Desse modo, se quisermos acessar o site estático mantido pelo servidor `Apache` , podemos acessar o endereço `http://localhost:55000` (Ou a porta que seu Docker definir para a imagem) no navegador.

É importante ressaltar que a **porta** `80` **é a porta interna** do container e a **porta** `55000` **é a porta externa**, ou seja, *aquela que pode ser acessada em nossa máquina*.


## Nomear um container
`--name` :
```
docker container run -d -P --name site-trybe httpd:2.4
```

Agora, o nome do container é **site-trybe** e para interromper seu funcionamento basta rodar o seguinte comando:
```
docker stop site-trybe
```

Para colocar o container ativo basta rodar o seguinte comando.
```
docker start stie-tryber
```


## Opção 2
Uma outra possibilidade importante ao criar um container é a possibilidade de linkar uma porta interna com uma porta do nosso computador.

  - `-P` - atribuição aleatória de portas <PORTA-SO-HOSPEDEIRO>:<PORTA-SO-CONVIDADO>  <porta da maquina>:<porta do container>
  - `-p` - atribuição específica de portas <PORTA-SO-HOSPEDEIRO>:<PORTA-SO-CONVIDADO>  <porta da maquina>:<porta do container>
```
docker run -d -p 54321:80 httpd:2.4
```
> mapeamos a porta 54321 do nosso computador à porta 80 do container. Agora podemos acessar o site estático mantido pelo servidor Apache acessando o endereço http://localhost:54321 no navegador.

> *A porta do container vai variar dependendo da aplicação rodada*. No caso do servidor http , a porta padrão de acesso para páginas web é a `80` .

> Em uma aplicação de React por outro lado, a imagem deveria expor a porta `3000` como padrão, então é importante saber qual porta sua aplicação vai usar antes de rodar o parâmetro `-p` .



