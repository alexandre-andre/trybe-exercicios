# Principais comandos do CLI
`docker <comando> <subcomando> <parâmetros>` é o formato padrão para comandos não-abreviados no CLI;

Utilize o parâmetro `--help` no <comando> ou <subcomando> para ter a relação completa do que pode ser executado a partir deles;

Exemplo: `docker container --help` , ou `docker container run --help` .

- Os <parâmetros> são opcionais na execução dos comandos;
- O conteúdo faz referência a documentação oficial dos [comandos no Docker Docs](https://docs.docker.com/engine/reference/commandline/docker/).


## Criar e rodar um container
```
docker container run <parâmetros> <imagem>:<tag>
```

## Nomear um container
O parâmetro `--name` define um <nome-da-sua-escolha> para aquele container (ao invés de um nome aleatório) :
```
docker container run --name <nome-da-sua-escolha> <imagem>:<tag>
```

## Remover ao final da execução - **Modo *Cleanup***: 
O parâmetro `--rm` *deve garantir que o container seja removido ao final da execução*
```
docker container run --rm <imagem>:<tag>
```

## Rodar o container em background
O parâmetro `-d` (de `--detach` , desacoplado em português) rodará esse container em segundo plano*:
```
docker container run -d <imagem>:<tag>
```

- Trabalhar em segundo plano significa que a aplicação está rodando, porém de forma assíncrona ao comando. É possível validar isso com o comando `docker ps -a` .
- O comando `-d` em outros aplicativos e serviços também pode estar associado ao conceito de daemon , que também é uma forma de se referenciar aplicativos que estão funcionando em segundo plano.
- No exemplo da imagem ubuntu, faz sentido passar o parâmetro `-d` associado ao `-it` como em: `docker container run -dit ubuntu` , o que manterá o container ativo em segundo plano, já com um terminal disponível para acesso;


## Criar um container sem executá-lo
```
docker container create <parametros> <image>:<tag>
```

### container ativo e com terminal de acesso
O parâmetro `-it` nesse contexto, deve garantir que ao iniciar o container , ele se mantenha ativo e disponha de um terminal de acesso:
```
docker container create -it <imagem>:<tag>
```


## Listar containers
### lista todos os containers ativos
```
docker container ls
```

### lista todos os containers ativos e inativos
```
docker container ls -a
```

### lista o ultimo container criado
```
docker container ls -l
```

### abreviação do comando `docker container ls`/  `docker container ps` 
```
docker ps <parametro>
```


## Iniciar, reiniciar, pausar, resumir e parar um container
É possível realizar essas operações passando mais de uma referência de container por vez,

### iniciar um container
```
docker container start <CONTAINER ID || NAMES>
```

### reiniciar um container
```
docker container restart <CONTAINER ID || NAMES>
```

### pausar um container
```
docker container pause <CONTAINER ID || NAMES>
```

### despausar um container
```
docker container unpause <CONTAINER ID || NAMES>
```

### parar um container
```
docker container stop <CONTAINER ID || NAMES>
```


## Retomando o acesso a um container interativo rodando em segundo plano
```
docker container attach <CONTAINER ID || NAMES>
ou
docker attach <CONTAINER ID || NAMES>
```


## Excluindo containers específicos
### remover container inativo
```
docker container rm <CONTAINER ID || NAMES>
ou
docker rm <CONTAINER ID || NAMES>
```

### remover container ativo
```
docker container rm -f <CONTAINER ID || NAMES>
ou
docker container rm -f <CONTAINER ID || NAMES>
```


## Limpar containers que não estão sendo utilizados
Esse comando deve remover **todos** os containers **inativos**
```
docker container prune
```


## Monitorar os processos dentro de um container
O comando `top` traz as informações sobre os processos que estão sendo rodados, mas dentro daquele container , o que não inclui, por exemplo, serviços que são compartilhados com o sistema hospedeiro. Ele é útil para quando estamos os rodando em segundo plano:
```
docker container top <CONTAINER ID || NAMES>
```

