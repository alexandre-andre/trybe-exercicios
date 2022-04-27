# LIKE
Usado para criar pesquisas dinamicas e maleáveis.
```sql
SELECT * FROM sakila.film WHERE title LIKE '%don';
-- selelhante ao regex e ao *
```

O `LIKE` é usado para buscar por meio de uma sequência específica de caracteres. Além disso, dois "curingas", ou modificadores, são normalmente usados com o LIKE :
- `%` - pode representar ZERO ou múltiplos caracteres
- `_` - representa um único caractere na string.
```sql
-- encontra qualquer resultado finalizando com don
SELECT * FROM sakila.film WHERE title LIKE '%don';

-- encontara qualquer resultado iniciando com plu
SELECT * FROM sakila.film WHERE title LIKE 'plu%'

-- Encontra qualquer resultado que contém "plu"
SELECT * FROM sakila.film WHERE title LIKE '%plu%';

-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
SELECT * FROM sakila.film WHERE title LIKE 'p%r';

-- Encontra qualquer resultado em que o segundo caractere da frase é "C"
SELECT * FROM sakila.film WHERE title LIKE '_C%';

-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT * FROM sakila.film WHERE title LIKE '________';

-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
SELECT * FROM sakila.film WHERE title LIKE 'E__%';
```


## Fixando
Para consolidar esse conhecimento, brinque com os resultados que serão encontrados usando os comandos acima e tente criar suas próprias condições. Depois de ter praticado um pouco com eles, tente encontrar as seguintes informações:
1. Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
2. Mostre todos os detalhes dos filmes cujas descrições finalizam com china .
3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord .
4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon .
5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary .
6. Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito .
7. Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
