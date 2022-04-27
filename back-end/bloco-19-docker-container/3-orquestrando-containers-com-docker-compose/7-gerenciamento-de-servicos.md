# Gerenciando Services
Alguns comandos de execução do arquivo `docker-compose.yaml`


## `Up`
```
docker-compose up
```

o Compose irá executar todos os containers especificados, baixando as imagens do repositório ou buildando localmente a partir do **Dockerfile**. Além de executar os containers , o Compose irá criar os demais objetos especificados, como redes e volumes.

Da mesma forma como rodamos os containers no modo `daemon` , podemos fazê-lo no `docker-compose up` utilizando o parâmetro `-d` .

O parâmetro `-f` também pode ser utilizado, caso o arquivo *Compose* receba um nome diferente do padrão. Se o arquivo possuir o nome padrão `docker-compose.yaml` , não é necessário passar a essa flag.

Caso seja utilizada a opção `-f` , lembrar que ela pertence ao comando `docker-compose` , sendo assim, ela precisa ser passada logo após ele.

A sintaxe `docker-compose <COMMAND> -f` não funcionará .
```
docker-compose -f meu-arquivo-compose.yaml up
 ou
docker-compose -f meu-arquivo-compose.yml stop
```


Se você está construiu localmente um arquivo `docker-compose.yaml` como o do exemplo que desenvolvemos até aqui, tente entrar no diretório em que está o arquivo e executar os services utilizando o o comando:
```
docker-compose up
```

Podemos também usar este comando especificando um service .
```
docker-compose up <SERVICE NAME>
```
Se fizermos isso, o *Compose* irá incluir também suas dependências. 

Por exemplo, seguindo com nosso arquivo `docker-compose.yaml` de, se rodarmos o comando:
```
docker-compose backend
```

O Compose também irá criar e startar o `database` , que definimos no `docker-compose.yaml` como dependência do `service` *backend* , por meio do parâmetro `depends_on` .

Caso seja usado o parâmetro `build` ao invés de `image` , o *Compose* irá *buildar* a imagem se isso não tiver sido feito anteriormente.

Nesse sentido, outro parâmetro importante para conhecermos e muito usual é o `--build` . Perceba que, uma vez que a imagem seja buildada pelo *Compose* , na próxima vez que executarmos o `up` , ele utilizará essa imagem já criada, sem atualizá-la.

Para forçamos um novo *build* , podemos utilizar a tag `--build` especificando um service ou não (dessa maneira ele irá tentar buildar todas as imagens possíveis novamente).
```
docker-compose up --build <SERVICE NAME>
```

> É muito comum utilizarmos o `--build` durante o desenvolvimento, pois quando fazemos alguma alteração e queremos refleti-la em nosso ambiente *Compose* , precisamos *rebuildar* a imagem do *service* alterado para que as atualizações sejam aplicadas ao ambiente.

> para os comandos *Compose* , quando não especificado um arquivo com `-f` , a ferramenta irá buscar pelo arquivo `docker-compose.yaml` no diretório atual


## `Down`
```
docker-compose down
```

Todos os containers irão ser parados e os objetos criados pelo `up` , como as redes, por exemplo, serão removidos.

Não precisa se preocupar com remoção das redes e dos apontamentos que o comando causará, pois ao rodar o up novamente, tudo será recriado.


## `Ps`
```
docker-compose ps
```

Utilizado para listar os containers ativos do Compose referenciado.


## `Stop`
```
docker-compose stop
ou
docker-compose stop <service name>
```

Usado para parar os `services` e, consequentemente, **todos** os *containers* relacionados. Diferentemente do `down` , ele não irá remover as redes e outros objetos criados pelo `up` .

De maneira semelhante ao que ocorre com o `docker-compose up` quando especificamos um **service** , ao especificarmos um **service** no o `docker-compose stop` , ele irá parar os serviços respeitando as dependências.

Em nosso exemplo, o backend será parado antes do database , ao executarmos o comando:
```
docker-compose stop backend
```


## `Start`
```
docker-compose start
```

Com ele, podemos startar os services parados referentes àquele arquivo Compose .


## `Logs`
Com ele, podemos ver os logs de nossos services de maneira semelhante como fazemos unitariamente com os containers . Aqui podemos especificar um service para visualizar os logs de todos os seus containers , ou ver todos os logs daquele ambiente, conforme arquivo do Compose .

De maneira similar também ao comando para containers , podemos utilizar a flag `-f` ou `--follow` (*para acompanhar em tempo real as saídas dos containers*) e o `--tail` (*em que podemos definir o número de linhas para ser exibidos a partir do final dos logs*) .
```
docker-compose logs -f --tail=100 <SERVICE NAME>
```

