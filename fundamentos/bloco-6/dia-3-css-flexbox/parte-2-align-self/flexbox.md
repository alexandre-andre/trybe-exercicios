# O Flexbox possui propriedades que impactam diretamente nesses elementos
## Align-self
permite utilizar a propriedade somente para um item
- flex-start
- flex-end
- stretch
- baseline
- center

## Order
Permite ordenar itens de um determinado container.
Por padrão, a propriedade order , implicitamente, possui o valor 0 , isso significa que, se apenas um item dentre 5 em um container recebe a propriedade order: 1.
Caso o item diferentão receba order: -1 , ele será exibido antes dos demais

## flex-grow, flex-shrink, flex-basis
- `flex-grow` expande o elemento no container
  - *0*
- `flex-shrink` encolhe o elemento no container
  - *1*  
- `flex-basis` especifíca o valor do tamanho inicial do elemento
  - *auto*
- `flex` grow shrink basis, junta flex-grow, flex-shrink e flex-basis
  - *0 1 auto*   

## Subcontainers, subtitens e margin
É quando temos containers dentro de containers e ambos podem ter flexbox. 