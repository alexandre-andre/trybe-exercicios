# 3ª Forma Normal
Preceitos:
- A tabela *deve estar na 1ª e 2ª Formas Normais*;
- A tabela *não deve conter atributos* (colunas) *que não sejam dependentes exclusivamente da PK* (chave primária).

### Livros
| livro_id |	categoria_id |	categoria |	valor |
|----------|---------------|------------|-------|
|     1    |	      1      |	Romance   |	29,90 | 
|     2    |	      2      |	Policial  |	34,90 | 
|     3    |	      3      |	Ficção    |	19,90 |
|     4    |	      4      |	Ficção    |	44,90 |
> É possível notar que a coluna *categoria* depende da coluna *categoria_id*, que não é a *PK* da tabela.

Quando um atributo (coluna) *for dependente* de outra coluna que **não** seja `PK` ou que **não** seja *dependente unicamente* da `PK`, como é o caso do exemplo acima, sua adequação à `Terceira Forma Normal` poderá se dar separando esse atributo em uma outra tabela. Dessa forma, ficaríamos com as tabelas assim:

### Livros
|livro_id |	categoria_id |	valor |
|---------|--------------|--------|
|    1    |   	 1       |	29,90 |
|    2    |   	 2       |	34,90 |
|    3    |   	 3       |	19,90 |
|    4    |   	 4       |	44,90 |

### Categorias
| categoria_id |	categoria |
|--------------|------------|
|      1       |	Romance   |
|      2       |	Policial  |
|      3       |	Ficção    |
|      4       |	Ficção    |