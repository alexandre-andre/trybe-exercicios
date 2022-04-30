# Dockerfile - Comandos básicos
Para criarmos containers para nossas aplicações, precisamos iniciar criando a imagem deles! E temos a alternativa de fazê-los a partir dos arquivos `Dockerfile` *.

O `Dockerfile` nada mais é do que um arquivo de configuração usado pelo Docker com a descrição passo a passo do que você deseja que aconteça.


## Criare rodar uma aplicação React com Dockerfile
Para deixar as coisas mais interessantes, vamos dockerizar uma aplicação React . Não faremos incrementos na aplicação porque nosso intuito aqui é focar no processo de *dockerização* dela.

Para dar contexto, vamos utilizar aqui um pequeno template em Node.js.

>  Node.js é um software que possui a implementação do motor V8 do Google (O mesmo que usamos para codar javascript no navegador Chrome) para utilização avançada em ambientes desktop.

A primeira coisa que você deverá fazer é criar um React App, aqui chamaremos de **react-dockerized** acessando ele posteriormente:
```
npx create-react-app react-dockerized
cd react-dockerized
```

Em seguida. crie um arquivo Dockerfile na raiz dessa pasta:
```
touch Dockerfile
```

A ideia do arquivo `Dockerfile` é que ele é autossuficiente, ou seja, é possível criar e executar uma aplicação toda só por comandos dentro dele.

Vamos simular um cenário que será bastante comum, que é o cenário de desenvolvimento local (em que teremos os arquivos de projeto dentro de uma pasta no computador, onde estará também o `Dockerfile` )


## Editando o Dockerfile
### FROM
Ao criarmos uma nova imagem, sempre devemos baseá-la em uma outra, para isso utilizamos o FROM. Por exemplo, para criar uma nova imagem que rodará sob um ubuntu :
```
FROM ubuntu:latest
```

A partir do `FROM` , é possível usar qualquer comando em qualquer ordem, porém, dependendo do funcionamento do aplicativo, etapas bem posicionadas podem otimizar o processo de `build` (construção da imagem) , `rebuild` (reconstrução da imagem) ou mesmo na distribuição. Isso porque quanto menos etapas para aplicação rodar, menos camadas a imagem vai gerar, diminuindo seu peso.

É recomendado utilizar sempre uma versão específica de nossa imagem base em nossas imagens de produção, por exemplo ubuntu:8 ao invés de ubuntu:latest , isso garante que estaremos utilizando sempre a mesma imagem base quando buildarmos nossa imagem, evitando quebras de compatibilidades caso a imagem "latest" seja atualizada para a versão 9 , por exemplo.

Outra recomendação é, sempre que possível, utilizar as versões "mínimas" da imagem. Por exemplo, imagens com tag `slim` ou `alpine` , que são muito mais leves, pois utilizam versões minimalistas do SO e que possuem menos dependências e ferramentas instaladas.

Consequentemente, pode ser necessário a instalação de alguma ferramenta específica (que normalmente já viria instalada no SO) para que nossa aplicação funcione corretamente, porém, isso pode ser feito de maneira simples em nosso Dockerfile . Essa prática vale a pena pelos benefícios de se ter uma imagem muito mais leve, que pode ser 10 vezes menor.

As especificações de imagens podem ser consultadas diretamente em Docker Hub.

No `Dockerfile` do nosso mini-projeto, vamos basear nossa imagem no `node:14-alpine` (*Node.js* *versão 14* que roda a partir da distro Alpine) e dar o alias "build" para ela :
```
FROM node:14-alpine AS build
```

### WORKDIR
Define um *diretório de trabalho*, que será utilizado como base para a execução dos comandos.
```
WORKDIR /diretorio/que/sera/utilizado
```

Vamos definir o diretório /app como nosso WORKDIR no Dockerfile :
```
WORKDIR /app
```

### COPY
Com ele conseguimos copiar diretórios e arquivos para dentro da nossa imagem
```
COPY ["<ARQUIVO_1>","<ARQUIVO_2>",...,"<ARQUIVO_X>", "<PASTA-DESTINO>"]
```

Imagine que estamos em um diretório que possui uma pasta app com o código fonte de uma aplicação, para copiá-la para dentro da imagem e conseguirmos executá-la, basta aplicar:
```
COPY ["./app", "/usr/src/app"]
```

Com o comando `COPY` conseguimos montar nossa estrutura do código fonte dentro da imagem, porém, para executá-la precisaríamos apontar para o diretório que definimos anteriormente como nosso diretório de trabalho ( `WORKDIR` ).

**NOTA**: `COPY` tanto a sintaxe na forma exec ( `COPY ["arquivo1", "arquivo2", "./destino"]` ) como na shell ( `COPY arquivo1 arquivo2 ./destino` ) são aceitas*.

```
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
```

### RUN
Irá executar uma lista de comandos durante a criação da imagem.
```
RUN ["<COMANDO>", "<SUBCOMANDO>", "<PARAMETRO-1>", ... , "<PARAMETRO-N>"]
```

**NOTA**: `RUN` também aceita tanto a sintaxe exec e shell.

```
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
```


## Passos intermediários
Por exemplo: fazer a cópia dos demais arquivos para dentro do container, porém, como já rodamos um `npm install` , é interessante criarmos um arquivo chamado `dockerignore` para adicionarmos lá a `node_modules`, de modo que ela não seja copiada.
```
touch .gitignore
node_modules
```

Agora, no `Dockerfile` do nosso mini-projeto, podemos definir a cópia de todos os arquivos apenas com o comando:
```
FROM node:14-alpine AS build
WORKIDR /app
COPY package*.json ./
RUN npm install
COPY . .
```

Também devemos adicionar um comando para executar o processo de `build` * da nossa aplicação, no `Dockerfile` :
No nosso exemplo, uma aplicação em React possui um script para gerar uma versão otimizada da página criada, por faremos esse processo aqui.
```
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
```

Na raiz do projeto, será criada uma pasta chamada build . Essa pasta contém uma versão otimizada da sua aplicação React .

Essa versão, geralmente, é utilizada para disponibilização da sua aplicação em processos de deploy (processo automatizado de disponibilização) e publicação na internet.

Para o nosso exemplo, utilizaremos essa build em associação com um servidor `http` , logo a seguir.


## NGINX
Aqui faremos um negócio chamado [`multi-stage build`](https://docs-docker-com.translate.goog/develop/develop-images/multistage-build/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=nui) *, que nada mais é que dividir o script do Dockerfile em mais de uma parte.

Então nessa segunda parte, passaremos a definir no `Dockerfile` do nosso mini-projeto os comandos do ambiente de produção, no qual utilizaremos um servidor `HTTP NGINX` .
> O Nginx é um software de código aberto para servidores web, originalmente utilizado para navegação HTTP, mas que atualmente também tem outras funcionalidades mais avançadas.

Agora, vamos definir a imagem de origem do `Nginx` , com o alias "`prod`". Em seguida, iremos copiar as informações da imagem que apelidamos de "`build`" e sua respectiva pasta para o diretório do servidor, como a seguir:
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
```


## EXPOSE
```
EXPOSE <PORTA-DO-APP-NO-CONTAINER>
```

Por padrão, o `Nginx` usa a porta `80` para executar as aplicações, então, podemos expor esta porta no nosso `Dockerfile` :
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
```

Vale ressaltar que quando formos rodar um container utilizando uma imagem que expõe uma porta, precisamos atribuir uma porta do nosso sistema hospedeiro ( host ) que direcionará para a porta do sistema convidado ( guest ) .
```
docker container run \
   -p <PORTA-HOST>:<PORTA-GUEST> \
   <IMAGEM>:<TAG>
```

Por exemplo, se temos uma aplicação que serve na porta `80` que está exposta no `Dockerfile` e queremos acessá-la a partir da porta `3000` do `host` , basta executarmos:
```
docker container run \
   -p 3000:80 \
   --rm \
   -dit \
   yeasy/simple-web:latest
```


## CMD
O comando `CMD` (**C** o **m** man **d** Prompt) , sempre é executado quando o container é **iniciado** .

É interessante ressaltar que pode acontecer de mais de um `CMD` ser definido em um mesmo `Dockerfile` e, neste caso, apenas o último terá efeito.

O `CMD` possui 2 formas: shell e exec.
```
CMD ["/bin/echo", "Hello World"]
```
> Nesse forma, o primeiro argumento é o executável e os demais são seus parâmetros.

Normalmente utilizamos o `CMD` para executar o comando que irá rodar com o container, poderíamos usar como exemplo o *start* de um *app* , por exemplo:
```
CMD npm start
```

**ATENÇÃO**: caso o container seja executado passando um comando no `run` , o comando passado sobrescreverá o comando definido no `CMD` .
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
CMD ["nginx", "-g", "daemon off"]
```


## ENTRYPOINT
Podemos utilizar o `CMD` para iniciarmos um comando ao executarmos nossos containers. Porém, para esse fim é recomendado utilizar `ENTRYPOINT`, pois, diferentemente do CMD , *o comando não será sobrescrito pelo passado no run ao executarmos o container*.
```
ENTRYPOINT ["/bin/echo", "Hello World"]
```

**ATENÇÃO**: ao definirmos um `entrypoint` , alteramos o comportamento do `CMD` , que ao ser utilizado irá rodar como base para o comando definido pelo `entrypoint` , apenas como "parâmetros adicionais" à ele, por exemplo:
```
ENTRYPOINT [ "/bin/echo" ]
CMD [ "Hello World" ]
```
> Nesse exemplo, será executado no iniciar do container `echo Hello World` .


Entendendo o comportamento:
```
ENTRYPOINT ["/bin/echo", "Hello"]
CMD ["WORLD"]
```
> Nesse caso, ao executarmos o container , seria executado `echo Hello World` , porém poderíamos passar um parâmetro para o comando docker container run , de modo a substituir o CMD :

```
docker container run nossa-hello-world-image John
```
> Nesse caso, teríamos a seguinte saída no console: *Hello John* . Pois o `CMD` seria substituído pelo comando passado no `container run` .


```
# FROM node-14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
ENTRYPOINT ["nginx", "-g", "deamon off"]
```
