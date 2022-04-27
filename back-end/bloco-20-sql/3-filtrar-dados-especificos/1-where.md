# `WHERE`
Entrega resultados mais exatos.
```sql
SELECT * FROM sakila.payment WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;
-- amount = 0.99 OR (amount = 2.99 AND staff_id = 2)
```

Como o operador `AND` *tem prevalência sobre o operador* `OR` , ele é avaliado primeiro. Então os registros buscados são aqueles nos quais `amount = 2.99` e `staff_id = 2` . Na sequência, são buscados os registros nos quais `amount = 0.99` , independente do valor de `staff_id` . Os valores retornados serão os resultados dessas duas buscas. Ou seja, a query é executada como se tivesse os seguintes parênteses: `amount = 0.99 OR (amount = 2.99 AND staff_id = 2)` .

Agora, quando executar a seguinte query :
```sql
SELECT * FROM sakila.payment WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;
```
Primeiramente, a expressão dentro dos parênteses é avaliada, e todos os resultados que satisfazem a condição `amount = 0.99 OR amount = 2`.99 são retornados. Na sequência, a expressão do lado direito do `AND` é avaliada, e todos os resultados que satisfazem a condição `staff = 2` são retornados. O `AND` então compara o resultado de ambos os lados e faz com que somente os resultados que satisfazem ambas as condições sejam retornados.
