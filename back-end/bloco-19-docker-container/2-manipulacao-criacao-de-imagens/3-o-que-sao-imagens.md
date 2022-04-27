# O que são imagens?
Imagens Docker são arquivos que funcionam como espécies de fotos de programas, bibliotecas, frameworks ou mesmo sistemas operacionais, a partir das quais construimos containers e executamos códigos dentro do Docker .

Voltando ao exemplo de quando rodamos uma imagem do Docker Hub pela primeira vez e ela é baixada automagicamente para o nosso computador, você pode confirmar a existência daquela imagem executando o seguinte comando:

```
docker images
```

Esse comando, serve para listar todas as imagens que foram baixadas em algum momento no seu computador.

Dessa forma podemos verificar que a imagem está devidamente instalada localmente como pode ser visto a seguir:

```
REPOSITORY     TAG       IMAGE ID       CREATED        SIZE
hello-world    latest    bc11b176a293   6 weeks ago    9.14kB
```

Já para sabermos se o container da imagem hello-world foi criado a partir da imagem, basta rodar o seguinte comando:
```
docker ps -a
```

Como já vimos anteriormente, o comando acima deve nos retornar a lista de containers ativos e inativos (parâmetro -a ):
```
CONTAINER ID   IMAGE         COMMAND      CREATED             STATUS                         PORTS         NAMES
b3b610c87a9   hello-world   "/hello"     24 minutes ago      Exited (0) 24 minutes ago                    priceless_nightingale
```

O que é preciso entender nesse ponto é que a partir de uma imagem, podemos ter vários containers .

Isso quer dizer que se rodarmos novamente o seguinte comando:

```
docker run hello-world
```

Teremos mais um container local da imagem hello-world , como no exemplo a seguir:
```
CONTAINER ID   IMAGE        COMMAND     CREATED          STATUS                    PORTS      NAMES
c7112ffa7991   hello-world  "/hello"    10 seconds ago   Exited (0) 9 seconds ago             optimistic_fermat
b3b610c87a9   hello-world  "/hello"    44 minutes ago   Exited (0) 44 minutes ago            priceless_nightingale
```

Agora, se executarmos o seguinte comando para listar as imagens:
```
docker images
```

Perceberemos que a imagem hello-world continua única:
```
REPOSITORY                     TAG       IMAGE ID       CREATED        SIZE
hello-world                    latest    bc11b176a293   6 weeks ago    9.14kB
```

O que aprendemos aqui é podemos ter vários containers reproduzindo uma mesma imagem do Docker .

Toda imagem possui sua `IMAGE ID` e todo container possui seu `CONTAINER ID` . Ambos são identificadores únicos desses elementos dentro do Docker e servem como referência para outras possibilidades de comando.

Por exemplo, anteriormente, vimos que o comando `docker container rm -f <CONTAINER ID>` apaga o container, mesmo que ele esteja ativo (parâmetro `-f` ).

Entretanto, se for necessário remover a imagem que gera os containers, primeiro é preciso obter o `IMAGE ID` por meio do seguinte comando:
```
docker images
```

Depois de obter o `IMAGE ID` , basta executar o comando `docker rmi -f <IMAGE ID>` , em que `rmi` vem de " **R** e **m** over **I** magem" ( remove image(s) ).
```
docker rmi -f bc11b176a293
```

Da mesma forma, o comando `-f` serve para forçar a remoção do recurso.

Sem a flag `-f` , o Docker irá nos alertar que já foram criados containers a partir da imagem que estamos tentando excluir, pois a remoção dessa imagem também removerá a fonte de referência dos containers criados a partir dela. Para excluir a imagem mesmo assim, é preciso acrescentar a flag `-f` .

A partir do momento que excluímos uma imagem que era referência para um container, precisaremos baixar uma nova imagem se quisermos rodar os containers criados novamente.
- É importante ressaltar que ao excluir uma imagem, os containers gerados a partir dela não serão excluídos, apenas ficaram órfãos das camadas da imagem que a utilizavam para executar suas funções.
