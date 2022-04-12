# O que são e como rodar `containers`
`Containers` são como "*pacotes*", porém eles funcionam numa dinâmica um pouco diferente.


## O que é um container e o que é uma imagem :
- ### `container`
  é um processo Docker que, internamente, possui tudo aquilo que é necessário para seu funcionamento: Sistema Operacional (Binários e Bibliotecas) e recursos necessários para sua aplicação;

- ### `imagem`
  é uma espécie de "fotografia" de um container , nós resgatamos uma imagem, quando queremos iniciar um novo container a partir de uma estrutura já conhecida.


## `Containers`
`Containers` lembram mas não são [máquinas virtuais](https://pt.wikipedia.org/wiki/M%C3%A1quina_virtual), já que podemos rodar uma aplicação Linux em qualquer ambiente através dele.

**Um `container` não é uma máquina virtual** , pois embora compartilhem de mesmas características, o `container` é uma instância isolada e compartilha dos mesmos recursos do sistema operacional hospedeiro, o que damos o nome de Virtualização a nível de Sistema Operacional (OS-level virtualization) .

Um `container` não deve ser utilizado para abrigar várias aplicações, e é justamente por isso que ele ocupa muito menos espaço que uma VM. Sua tendência é de manter somente o essencial no seu conteúdo.


## `Imagens`
`Imagens` podem se referir a praticamente qualquer tipo de `container` . Um exemplo disso é pensar o próprio sistema operacional Ubuntu, que possui uma [imagem oficial no Docker Hub](https://hub.docker.com/_/ubuntu) .

O [Docker Hub](https://hub.docker.com/) é o principal `repositório de imagens` Docker atualmente. Nele, possuímos o que é chamado de Registro (**Registry**) *, onde requisitamos essas imagens.

> O [Registry](https://docs.docker.com/registry/introduction/) é um sistema de armazenamento e entrega, no qual podemos ter um usuário com nossas próprias imagens. Algo que lembra muito o GitHub, já que podemos dar pull nessas imagens para uso posterior.


## Fluxo padrão
1. Tudo começa em um arquivo chamado Dockerfile (o resultado de umDockerfile é uma imagem);
   Aqui vão instruções de qual sistema operacional usar, tal como quais comandos devem ser executados quando a imagem for rodada em um container .

2. Após isso, podemos dar push ou pull (como em um repositório do GitHub) em uma imagem no Registry *;
  Você pode dar pull na sua própria imagem (caso tenha dado push nela) ou em outra a sua escolha, como foi o caso do hello-world ).

  O Registro mais comum é o Docker Hub , mas temos outros exemplos, como mostrado na imagem.


3. Por último, rodamos a imagem em um container , utilizando o comando run (o container é a imagem criando vida).
   Após isso, temos que dizer pro container o que deve acontecer, se ele deve se manter ativo ou não, caso o contrário, o container é encerrado. O que faz parte de seu ciclo de vida.


#
## Rodando o sistema operacional Ubuntu em um container
```
docker <comando> <sub-comando> <parâmetros>
```

O formato do comando para rodar um container é o seguinte:
```
docker container run <nome-da-imagem>:<tag>
```
> `<tag>` representa a versão daquela imagem, caso nenhuma seja passada, ele assumira que é a última versão disponível ( latest ).

```
docker container run ubuntu
```
Se Deus permitir, vai dar tudo certo e rodar no terminal


1. Uma vez que sua máquina local não possua a imagem do registro ( Unable to find image 'ubuntu:latest' locally ) , o Docker deve se encarregar de baixar essa imagem, fazendo o pull automaticamente ( latest: Pulling from library/ubuntu ) ;
2. Uma vez que o Docker baixou a imagem e rodou o container , nada aconteceu!
