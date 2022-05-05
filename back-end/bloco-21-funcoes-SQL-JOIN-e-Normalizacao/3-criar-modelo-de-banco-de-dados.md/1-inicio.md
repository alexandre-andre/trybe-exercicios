# Início
Transformando uma idéia em um banco de dados!

O primeiro passo é analisar quais as tabelas precisam ser criaadas e quais informações precisam ser armazenadas em cada uma delas. Por exemplo, a tabela que vai armazenar as informações de cada álbum pode ter as seguintes informações:
```
Título
Preço
Estilo Musical
Canções
```

Mas peraí... O álbum não deveria possuir o nome do artista?

Nem sempre! Imagine que adicionamos o nome do artista na tabela de álbum e ele possui 10 álbuns. Isso significa que o nome do artista está em 10 lugares diferentes, certo? Porém, em um belo dia, o artista resolveu trocar de nome... E agora?

Teríamos que trocar o nome do artista em 10 lugares diferentes!

Esse é um dos problemas que a modelagem de um banco de dados te ajuda a resolver!

Ao modelar e criar um banco de dados precisamos analisar qual é a forma mais eficaz de armazenar e relacionar essas informações. Ou seja, podemos criar uma tabela que possui as informações do artista e relacioná-la com a tabela de álbum! Dessa maneira, caso o nome do artista seja modificado, realizamos essa alteração apenas na tabela do artista.

- ### Identificação das Entidades:
   - Entidade 1: Álbum;
   - Entidade 2: Artista;
   - Entidade 3: Estilo Musical;
   - Entidade 4: Canção;
- ### Identificação dos Atributos:
   - Álbum: album_id, titulo, preco, estilo_id e artista_id;
   - Artista: artista_id e nome;
   - Estilo Musical: estilo_id e nome;
   - Canção: cancao_id, nome e album_id;
- ### Identificação dos Relacionamentos:
   - Um artista pode possuir um ou mais álbuns;
   - Um estilo musical pode estar contido em um ou mais álbuns;
   - Um álbum pode possuir uma ou mais canções;
```sql
DROP SCHEMA IF NOT EXISTS Albuns;
CREATE SCHEMA Albuns;
USE Albuns;

CREATE TABLE artista(
  artista_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE estilo_musical(
  estilo_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE cancao(
  cancao_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  album_id INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album(album_id)
);

CREATE TABLE album(
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  preco INT NOT NULL,
  estilo_id INT NOT NULL,
  artist_id INT NOT NULL,
  FOREIGN KEY (estido_id) REFERENCES estilo_musical(estilo_id),
  FOREIGN KEY (artist_id) REFERENCES artista(artista_id)
);
```


