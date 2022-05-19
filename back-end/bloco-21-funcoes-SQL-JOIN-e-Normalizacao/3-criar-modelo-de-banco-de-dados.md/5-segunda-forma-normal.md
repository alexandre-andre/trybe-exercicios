# 2ª Forma Normal
Preceitos:
- A tabela *deve estar na 1ª Forma Normal*;
- A tabela *não deve possuir dependências parciais*.

Uma dependência parcial pode ser considerada como qualquer coluna que não depende exclusivamente da chave primária da tabela para existir. Por exemplo, considere uma tabela **Pessoa Estudantes** que possui as seguintes colunas:
### Pessoas Estudantes
| id  | 	nome  |	data_matricula |	curso |
|-----|---------|----------------|--------|
| 1   |	Samuel  |	  2020-09-01   | Física |
| 2   |	Joana   |	  2020-08-15   | Biologia |
| 3   |	Taís    |	  2020-07-14   | Contabilidade |
| 4   |	André   |	  2020-06-12   | Biologia |

A coluna *curso* pode ser considerada uma dependência parcial, pois é possível mover os valores dessa coluna para uma outra tabela. Os dados dessa tabela podem existir independente de existir uma *pessoa estudante* vinculada a esse *curso* ou não. Dessa forma, depois de normalizar, teríamos duas tabelas:
### Cursos
| id | nome |
|----|------|
| 1  | Física |
| 2  | Biologia |
| 3  | Contabilidade |

### Pessoas Estudantes
| id  | 	nome  |	data_matricula |	curso |
|-----|---------|----------------|--------|
| 1   |	Samuel  |	  2020-09-01   |   1    |
| 2   |	Joana   |	  2020-08-15   |   2    |
| 3   |	Taís    |	  2020-07-14   |   3    |
| 4   |	André   |	  2020-06-12   |   4    |


Dessa forma, foi possível aplicar a `Segunda Forma Normal` na tabela **Pessoas Estudantes**. Lembre-se que a função da normalização não é necessariamente reduzir o número de colunas mas remover redundâncias e possíveis anomalias de inclusão, alteração ou remoção de dados.


## Dependência Funcional
É quando através da *PRIMARY KEY* de uma tabela, é admissível haver valores repetidos em outras colunas da tabela.


## Dependência Parcial
É quando o valor de uma coluna *INDEPENDE* de coluna alguma da tabela.
