# Gerando uma imagem a partir do nosso Dockerfile
```
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```


Para que a gente consiga de fato consolidar essas instruções em uma imagem, precisamos rodar o comando `docker image build -t <name:tag> <origem_docker_file>` !
```
docker image build -t react-dockerized:v1 .
```
> Utilizamos o comando `docker` , acompanhado da instância `image` , e do subcomando `build` . Isso deve retornar o log do processo de build , algo como:

```
Sending build context to Docker daemon  870.4kB
Step 1/10 : FROM node:14-alpine AS build
 ---> fe39f43f1d22
Step 2/10 : WORKDIR /app
 ---> Running in e42203ccae10
Removing intermediate container e42203ccae10
 ---> 890531fc8024
Step 3/10 : COPY package*.json ./
 ---> 7c756629dd86
Step 4/10 : RUN npm install
 ---> Running in 379b2754f2f6

# ... demais passos

Removing intermediate container 1be22b2c3906
 ---> 9392a56b85dc
Successfully built 9392a56b85dc
Successfully tagged react-dockerized:v1
```

> Também utilizamos o parâmetro `-t` (de `tag` ) com o valor `react-dockerized:v1` (aqui já estamos puxando uma `tag` "v1" para nossa imagem) e o ponto . , que está dizendo que o `Dockerfile` se encontra na mesma pasta em que o comando está sendo executado.


Após a execução da build , podemos listar nossas imagens e verificar a presença da que acabamos de criar, com:
```
docker images
```


Para ver nossa aplicação funcionando, podemos rodar nosso mini-projeto no terminal interativo, definindo qual porta do nosso localhost será atribuida para qual porta do container :
```
docker run -dit -p 8000:80 --name reactdockerized react-dockerized:v1
```
