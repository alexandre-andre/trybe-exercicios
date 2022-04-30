# Exercício 7 :
Crie um arquivo Compose para subir o Wordpress com MySQL :
1. Utilize a imagem `wordpress:latest` e `mysql:5.7` ;
2. Faça bind da porta `80` do container do wordpress para `8080` do host ;
3. Defina as seguintes variáveis para o wordpress :
  - WORDPRESS_DB_HOST: db:3306
  - WORDPRESS_DB_USER: wordpress
  - WORDPRESS_DB_PASSWORD: wordpress
  - WORDPRESS_DB_NAME: wordpress
4. Defina as seguintes variáveis para o mysql :
  - MYSQL_ROOT_PASSWORD: somewordpress
  - MYSQL_DATABASE: wordpress
  - MYSQL_USER: wordpress
  - MYSQL_PASSWORD: wordpress
5. Defina o volume `db_data` para o mysql;
6. Utilize o parâmetro `depends_on` para criar dependência entre os serviços;
7. Adicione a política de `restart` com o valor `always` aos serviços;
8. Suba os serviços utilizando `docker-compose` e abra no terminal para validar o funcionamento.



# Solução
```yml
  version: '3.3'

  services:
    db:
      image: mysql:5.7
      volumes:
        - db_data:/var/lib/mysql
      restart: always
      environment:
        MYSQL_ROOT_PASSWORD=somewordpress
        MYSQL_DATABASE=wordpress
        MYSQL_USER=wordpress
        MYSQL_PASSWORD=wordpress

    wordpress:
      depends_on:
        - db
      image: wordpress:latest
      ports:
        - "8000:80"
      restart: always
      environment:
        WORDPRESS_DB_HOST=db:3306
        WORDPRESS_DB_USER=wordpress
        WORDPRESS_DB_PASSWORD=wordpress
        WORDPRESS_DB_NAME=wordpress
  volumes:
      db_data: {}
```

[documentacao do exercicio](https://docs.docker.com/compose/wordpress/)