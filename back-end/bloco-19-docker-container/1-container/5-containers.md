# O que são e como rodar `containers` ?
`Containers` são como "*pacotes*".


## Container x Imagem
- ### `Container`
  - é um processo Docker que, internamente, possui tudo aquilo que é necessário para seu funcionamento.

  - `Containers` lembram mas não são [máquinas virtuais](https://pt.wikipedia.org/wiki/M%C3%A1quina_virtual), já que podemos rodar uma aplicação Linux em qualquer ambiente através dele.

  - **Um `container` não é uma máquina virtual** , pois embora compartilhem de mesmas características, o `container` é uma instância isolada e compartilha dos mesmos recursos do sistema operacional hospedeiro, o que damos o nome de Virtualização a nível de Sistema Operacional (OS-level virtualization).

  - Um `container` não deve ser utilizado para abrigar várias aplicações, e é justamente por isso que ele ocupa muito menos espaço que uma VM. Sua tendência é de manter somente o essencial no seu conteúdo.

- ### `Imagem`
  - é uma "fotografia" de um `container`.

  - `Imagens` podem se referir a praticamente qualquer tipo de `container`. Um exemplo disso é pensar o próprio sistema operacional Ubuntu, que possui uma [imagem oficial no Docker Hub](https://hub.docker.com/_/ubuntu).

  - O [Docker Hub](https://hub.docker.com/) é o principal `repositório de imagens` Docker atualmente. Nele, possuímos o que é chamado de [Registro](https://docs.docker.com/registry/introduction/) (**Registry**) *, onde requisitamos essas imagens.


> O `Registry` é um sistema de armazenamento e entrega, no qual podemos ter um usuário com nossas próprias imagens. Algo que lembra muito o GitHub, já que podemos dar `pull` nessas imagens para uso posterior.


## Fluxo padrão
<img src="../img/docker-flow.png">

Tudo começa em um arquivo chamado `Dockerfile` (o resultado de um Dockerfile é uma imagem);
  > Aqui vão instruções de qual sistema operacional usar, tal como quais comandos devem ser executados quando a imagem for rodada em um `container` .

Após isso, podemos dar `push` ou `pull` (como em um repositório do GitHub) em uma imagem no `Registry` *;
  > Você pode dar `pull` na sua própria imagem (caso tenha dado `push` nela) ou em outra a sua escolha.
  > O Registro mais comum é o `Docker Hub` , mas temos outros exemplos, como mostrado na imagem.

Por último, rodamos a imagem em um container , utilizando o comando `run`.
  > Após isso, temos que dizer pro container o que deve acontecer, se ele deve se manter ativo ou não, caso o contrário, o container é encerrado. O que faz parte de seu ciclo de vida.


#
## Rodando o sistema operacional Ubuntu em um container
```
docker <comando> <sub-comando> <parâmetros>
```
> podemos abreviar alguns comandos, como foi o caso do `docker run hello-world` , que também poderia ser escrito como `docker container run hello-world`, esta última é mais atual e verbosa .


O formato do comando para rodar um container é o seguinte:
```
docker container run <nome-da-imagem>:<tag>
```
> `<tag>` representa a versão daquela imagem, caso nenhuma seja passada, ele assumira que é a última versão disponível ( latest ).


Para isso, no terminal, rode o comando:
```
docker container run ubuntu
```


Resultado
1. Uma vez que a máquina local não possua a imagem do registro ( `Unable to find image 'ubuntu:latest' locally` ) , o Docker deve se encarregar de baixar essa imagem, fazendo o `pull` automaticamente ( `latest: Pulling from library/ubuntu` ) ;
2. Uma vez que o `Docker` baixou a imagem e rodou o `container` , nada aconteceu!

Na verdade, esse é o comportamento normal! Se não dissermos para o container o que ele deve fazer a seguir, o container é simplesmente encerrado. Pois foi isso mesmo que aconteceu! Um container foi criado e iniciado e, uma vez que não demos nenhuma outra instrução pra esse container , ele foi encerrado.


## Listar containers ativos
```
docker container ls
```


## Listar containers ativos e inativos
```
docker container ls -a
```


## Listar o último container
```
docker container ls -l
```

Se rodarmos o comando `docker run <imagem>` mais de uma vez, para cada uma dessas vezes será criado um container.

Isso significa que o comando `run` também **cria um novo container para aquela imagem toda vez que é executado**.


## Significado de cada coluna de um container
- **CONTAINER ID**: Identificador único*;
- **IMAGE**: O nome da imagem utilizada para a criação do container ;
- **COMMAND**: O comando executado/ em execução dentro do container ;
- **CREATED**: Quando foi criado o container ;
- **STATUS**: O status atual do mesmo, no nosso caso, encerrado;
- **PORT**: A porta que estamos utilizando para nos comunicar com o container**;
- **NAMES**: O apelido do container , como não definimos nenhum, foi criado um aleatório.

> <porta-do-host>:<porta-do-cliente> === <porta do sistema>:<porta do container>


## Rodando um comando adicional antes de terminar o container
No Docker é possível executar comandos de terminal no container antes que ele seja encerrado.
Para executar comandos no terminal do container é só adiciona-los no final da execução do `run` , conforme o modelo:
```
docker container run <nome da imagem>:<tag> <comando> <argumentos do comando>
docker container run ubuntu echo 'Hello my friend!'
```


## Rodar container iterativo
Se quisermos, por exemplo, utilizar um terminal dentro do `container` é só passar o parâmetro `-ti` * ao comando `run` que dá acesso a esse terminal*:
  - `-t` que indica ao docker que estamos requisitando um *terminal* no container que consiga imprimir o retorno dos nossos comandos
  - `-i` estabelece uma interface de comunicação física com esse terminal, no caso, por meio do teclado. 
```
docker container run -ti ubuntu
```
Dessa forma é possível ter acesso a ao terminal de forma interativa dentro do container , esse terminal já vem por padrão em modo `root` (`#`):

- O domínio do usuário `root` no terminal do container é o `CONTAINER ID` do mesmo.
- O comando `cat /etc/lsb-release` retorna os dados da distribuição, no caso, o Ubuntu 20.04 que é a imagem utilizada;
- Para sair desse terminal interno do container e retornar ao seu terminal, é só utilizar o comando `exit` .
