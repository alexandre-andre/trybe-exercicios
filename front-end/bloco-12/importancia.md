Imagine que seu componente nem sequer apareceu na tela da pessoa que utiliza sua página e que você já pediu para atualizar algum elemento gráfico contido no componente. Esse elemento gráfico que você tentou acessar ainda não existe, então esse pedido foi um desperdício de tempo e recursos do computador, concorda? Mas qual o problema disso? Se você enquanto pessoa que programa o software não se preocupar com o momento em que cada recurso deve ser utilizado (recursos são finitos) , você provavelmente vai estar utilizando mal esses recursos.


As funções de ciclo de vida do componente vêm para nos dar o controle necessário para utilizar cada recurso no momento certo e para garantir que a assincronicidade do React não prejudique a lógica do que você está tentando executar. Seja para a chamada de uma API , seja para atualização de algum elemento gráfico, é fundamental respeitar o momento em que seu componente se encontra.

- `componentDidMount` para *executar uma ação após o componente ser inserido no DOM*;
- `shouldComponentUpdate` para **avaliar se uma atualização do componente deve ou não acontecer naquele momento**;
- `componentDidUpdate` para *executar uma ação após o componente ser atualizado*;
- `componentWillUnmount` para **realizar uma ação antes de o componente ser desmontado**.