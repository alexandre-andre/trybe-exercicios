# Funções em contexto
O exemplo anterior ilustra como funções podem ser colocadas em um contexto para permitir acesso em qualquer componente em que o contexto esteja disponível. De fato, uma vez que funções em JavaScript são valores como outro qualquer, não há diferença entre adicionar uma função ou qualquer outro valor dentro do objeto que será disponibilizado pelo contexto.

Você só deve se lembrar de fazer o binding no construtor ou criar a função como arrow function sempre que ela for utilizada como callback a partir de outro componente ou função.

