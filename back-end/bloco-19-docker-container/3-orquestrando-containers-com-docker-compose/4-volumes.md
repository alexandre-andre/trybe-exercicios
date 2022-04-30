# Volumes - Mapeando pastas para utilização em containers
O que sabemos até o momento é que se removermos um container , todos os dados que manipulamos sobre ele também serão removidos. Isso acontece porque estamos escrevendo na camada criada pelo container e que permite leitura e escrita.

Mas existe uma a possibilidade de persistir os dados em um container , que é a utilização de **volumes** !

Utilizar um volume *significa mapear uma pasta do nosso Sistema Hospedeiro* ( `Docker Host` ), *para o Sistema Convidado* (o `container` ).

Utilizando um exemplo com o Apache , pense na seguinte situação: Queremos desenvolver nossa página HTML de forma que ela rode dentro do servidor http Apache , que não está instalado em nossa máquina.

Assim, a medida que formos desenvolvendo nossa página HTML , precisamos que o nosso ambiente de desenvolvimento permaneça no container .

Para isso, a primeira coisa que vamos fazer é criar a seguinte página HTML :
```html
<!DOCTYPE html>
   <html>
      <head>
      <title>Docker é muito bom!</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   </head>
   <body>
      <h1>Minha primeira página rodando em Docker.</h1>
      <p>Estou começando minha primeira página em HTML.</p>
   </body>
</html>
```
Salve o arquivo com o seguinte nome e extensão *primeiro-teste.html* em alguma pasta local de fácil acesso*. Aqui usaremos o caminho */home/trybe/meu-site* .

Agora vamos criar um *container* , que manterá um **volume** vinculado a essa nossa pasta local, para que qualquer alteração que fizermos em nosso `HTML` seja refletida no servidor `http` em nosso `container` .

Para isso, vamos usar no comando `run` , o parâmetro `-v` (de 'volume') da forma `-v <PASTA-LOCAL>:<PASTA-CONTAINER>` :
```
docker run -d --name aprendendo-volumes -p 8881:80 -v <PASTA-LOCAL>:<PASTA-CONTAINER> httpd:2.4
docker run -d --name aprendendo-volumes -p 8881:80 -v "/home/trybe/meu-site/:/usr/local/apache2/htdocs/" httpd:2.4
```

Vamos entender esse comando que acabamos de executar nos concentrando na flag `-v` .

Essa flag cria um volume e é seguida pelo endereço do diretório em nossa máquina `/home/trybe/meu-site/` acompanhada do endereço no diretório do servidor `/usr/local/apache2/htdocs/` *, ao qual será vinculado.
  - Esse diretório é específico para armazenar os arquivos que vão ser acessados no servidor `http Apache` e pode ser diferente, caso seja usado outro aplicativo.

Dessa forma qualquer modificação que realizarmos no arquivo HTML em nossa máquina local será refletido pelo container, no endereço da pasta do nosso servidor apache.

Agora acesse o site mantido pelo servidor Apache acessando o endereço http://localhost:8881/primeiro-teste.html no navegador e lá estará o aquivo HTML que você acabou de criar.

Vamos fazer um teste! Acesse novamente o arquivo primeiro-teste.html que a acabamos de criar e edite-o da seguinte forma:
```
<!DOCTYPE html>
   <html>
      <head>
      <title>Docker é muito bom!</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   </head>
   <body>
      <h1>Minha primeira página rodando em Docker, que maravilha!</h1>
      <p>Estou começando minha primeira página em HTML e estou muito feliz! #VQV</p>
   </body>
</html>
```

Salve seu arquivo e recarregue sua página no browser.

O que podemos concluir com isso? Podemos criar um ambiente de desenvolvimento baseado apenas no uso de containers , o que facilita bastante o trabalho dos times de desenvolvimento, já que o volume pode ser compartilhado entre o time, e acessado via diferentes containers .

Da mesma forma, tendo um volume na sua máquina, você pode utilizar outros containers sem perder seus arquivos!

Com o uso do **volume**, mesmo que o *container* seja excluído, o **volume será mantido**. Isso quer dizer que tudo que colocarmos na pasta `/usr/local/apache2/htdocs/` , do container , ficará preservado na pasta `/home/trybe/meu-site` em nossa máquina.

PARA VERIFICAR
```
docker inspect site-trybe2 #que é o nome que demos ao nosso container
```

Teremos uma saída com muitas informações, mas o mais importante nesse momento é o "*Mounts*" que nos mostra através da propriedade `Source` onde está o volume desse container em nosso *Docker Host* .
```
"Mounts": [
   {
      "Type": "bind",
      "Source": "/home/trybe/meu-site",
      "Destination": "/usr/local/apache2/htdocs",
      "Mode": "",
      "RW": true,
      "Propagation": "rprivate"
   }
]
```

Bem, agora que confirmamos que temos um **volume** criado em nosso `Docker Host` faremos a exclusão de nosso container e verificaremos se junto com o container nossa pasta `/home/trybe/meu-site` também será excluída.

Para isso, em posse do id do nosso container primeiro precisamos pará-lo com o comando:
```
docker stop site-trybe2
```

Agora que paramos o nosso container, vamos excluí-lo com o comando:
```
docker rm site-trybe2
```

Agora vamos verificar se a pasta onde salvamos nosso arquivo html permanece no mesmo lugar ou foi removida junto com o container:
```
cd /home/trybe/meu-site && \
ls -la
```

Isso deve retornar a lista de arquivos na pasta, algo como:
```
drwxrwxr-x 1 trybe trybe   38 set 22 17:37 .
drwxr-xr-x 1 trybe trybe 1236 set 22 17:33 ..
-rw-rw-r-- 1 trybe trybe  354 set 22 17:43 primeiro-teste.html
```

Nosso arquivo primeiro-teste.html permanece intacto.


Também é possível especificar os volumes da nossa imagem no nosso `Dockerfile` . Para isso, basta utilizarmos o comando `VOLUME` e então, caso não especifiquemos outros comportamentos para o container , será criado o ponto de montagem especificado.

A sintaxe em nosso `Dockerfile` é bem simples, basta especificarmos qual diretório será utilizado como volume por nossa imagem:
```
VOLUME ["/data"]
```

## ⚠️ Importante: Toda vez que criarmos um container que mapeia um volume, ele alocará espaço para esse volume no seu sistema .

É sempre importante verificar os volumes utilizando `docker volume ls` e remover aqueles não utilizados, seja com o comando `docker volume rm <VOLUME NAME>` , seja com `docker volume prune` (⚠️ **esse comando remove todos os volumes que não estão sendo utilizados por containers**) ;

Também é possível *remover volumes automaticamente ao remover containers* , utilizando o comando `docker container rm -v <CONTAINER ID || NAMES>` , onde o `-v` indica para o docker, que o **volume** associado ao container também deve ser removido.

