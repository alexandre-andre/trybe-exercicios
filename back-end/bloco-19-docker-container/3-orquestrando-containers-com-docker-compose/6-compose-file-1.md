# Compose File - Parte I
Resumidamente, o arquivo `Docker Compose` é onde conseguimos especificar todos os parâmetros que antes rodávamos unitariamente utilizando `docker container run` , além de podermos também criar os demais objetos utilizados por eles, como *redes* e *volumes* .

Mapear todos os comandos e estruturá-los em um único arquivo tem diversas vantagens. Uma delas, especialmente vantajosa quando estamos trabalhando com muitos containers , é evitar ter que sempre digitar inúmeros parâmetros em linha de comando com o `run` . Além disso, utilizar o `Docker Compose` torna mais fácil editar configurações e automatiza a execução de comandos.

Toda a configuração do Docker Compose é feita por meio de um arquivo YAML . O nome padrão que utilizamos é `docker-compose.yaml` , porém, pode ser utilizado qualquer outro nome de nossa escolha.
```
version: "<VERSÃO-DO-COMPOSE>"
services: # Definição dos containers
  <MEU-CONTAINER-1>:
    image: <MINHA-IMAGEM:VERSÃO> # Exemplo carregando uma imagem já _buildada_
    # ... outras configurações
  <MEU-CONTAINER-2>:
    build: <CAMINHO-DO-DOCKERFILE> # Exemplo gerando uma build a partir de um `Dockerfile`
    # ... outras configurações
  <MEU-CONTAINER-N>:
    image: <MINHA-IMAGEM:VERSÃO>
    # ... outras configurações
```


## `Version`
Todo arquivo `docker-compose.yaml` deve iniciar com a tag `version` , dessa maneira definimos qual a versão que deverá ser utilizada pelo compose para interpretar o arquivo, evitando assim que o `docker-compose.yaml` fique incompatível com versões mais recentes do compose .
```
version: '3'
```


## `Services`
São os "tipos" dos containers que iremos rodar. Por exemplo, se vamos executar uma **API** , dizemos que ela é um **service** . Isso porque com o Compose , podemos escalar nossos apps em vários containers .

Podemos, por exemplo, escalar nossa *API* em 4 containers diferentes, de forma que teremos um service que é a nossa *API* , porém com 4 *containers* em execução.
```
version: '3'
services:
  frontend: -nome do service 1-

  backend:  -nome do service 2-

  database:  -nome do service 3-
```

Todo container é criado a partir de uma imagem , sendo assim, precisamos especificá-las aos nossos serviços. Para isso, podemos utilizar dois comandos: `image` *para especificar uma imagem*, seja local ou a ser baixada no Docker Hub , ou `build` , *para apontar* um diretório com o `Dockerfile` a partir do qual o *Compose* irá *buildar* a imagem para nós.
```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
  database:
    image: mjgargani/compose-example:database-trybe1.0
```
> É como se estivéssemos executando três `docker container run` , um para cada serviço


## `Restart`
No Docker , existem as políticas de reinicialização, que servem para gerenciar se seus containers reiniciarão automaticamente quando o docker for reiniciado ou quando ocorrer algum erro, por exemplo.
- `no` - valor padrão assumido pelo Docker, define que o container não irá restartar automaticamente;
- `on-failure` - Define que o container será reiniciado caso ocorra alguma falha, apontado pelo exit code diferente de zero;
- `always` - sempre que o serviço parar ele irá ser reiniciado; *
  - Caso o container seja interrompido manualmente, ele só será reiniciado depois que o daemon do Docker for reiniciado ou que o próprio container seja reiniciado manualmente. Esse é um mecanismo pra evitar loops .
- `unless-stopped` - Define que o container sempre seja reiniciado, a menos que o Docker em si seja parado (manualmente ou não). No caso de ser interrompido, ele não reinicia nem depois que o daemon do Docker * seja reiniciado.

> O *daemon* do Docker é um processo que contínuo e que roda em segundo plano, que gerencia os containers Docker em um host .


## `Ports`
Tem o mesmo comportamento do `-p` do `docker container run` .
<pora do host>:<porta exposta do container>


## `Environment`
Configurar as variáveis de ambiente dos containers.

Imagine que precisamos passar para o back-end uma parte da `URL` onde o banco de dados irá rodar, em uma variável chamada `DB_HOST`.

Quando passamos a variável "DB HOST" que está em nosso _host , para a variável "DB HOST" do _container , onde o back-end está esperando pela variável. Lembre-se que mesmo tendo a *env* configurada em seu ambiente, ela só será passada ao container se especificada aqui, da mesma maneira como fazemos com o parâmetro `-e` ou `--env` no comando `run` .

Também é possível utilizar variáveis de ambiente. Por exemplo, imagine que temos uma variável API_SECRET com uma secret . Por se tratar de um dado sensível, não podemos colocá-lo em um arquivo a ser versionado como parte de nossa aplicação, porém ainda temos que especificar ao Compose qual variável irá ser passada para qual container .

> * No contexto de Docker, `secret` é um dado que `não deve` ser transmitido por uma rede ou armazenado *sem criptografia* em um Dockerfile ou no código fonte de sua aplicação, como uma senha ou uma chave privada SSH, por exemplo.

[mais detalhes](https://docs.docker.com/compose/environment-variables/)


## `Depends On`
Importante para garantir a ordem de inicialização e encerramento de services. Ele estabelece dependências entre os serviços.

```dockerfile
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - "backend"

  backend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
    environment:
      DB_HOST=database
    depends_on:
      - "database"

  database:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
```

Nesse exemplo, os *services* serão iniciados respeitando a ordem das dependências, portanto, o `database` *será iniciado antes do backend* , *que será startado antes do* `frontend` .