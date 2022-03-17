# O problema
### O que é Context API e como ela pode ser utilizada, vamos entender qual é sua motivação e que tipo de problema ela resolve.

Vamos imaginar uma hierarquia de componentes um tanto quanto lúdica, mas que serve aos nossos propósitos. Imagine que temos quatro componentes, representando uma família: `GreatGrandfather` , `Grandmother` , `Father` e `Daughter`. Como você deve imaginar, esses componentes representam, respectivamente, um bisavô, uma avó, um pai e uma filha de uma família. O bisavô deixou acumulada uma herança de R$ 1.000.000 e, atualmente, só sua neta (o componente Daughter ) está interessada em saber o valor da herança.

```javascript
import React, { Component } from 'react';

class GreatGrandfather extends Component {
  state = {
    inheritance: 1000000,
  }

  render() {
    return (
      <Grandmother inheritance={this.state.inheritance} />
    );
  }
}

function Grandmother(props) {
  return (
    <Father inheritance={props.inheritance} />
  );
}

function Father(props) {
  return (
    <Daughter inheritance={props.inheritance} />
  );
}

function Daughter(props) {
  return (
    <div>
      <span>
        {`Tenho uma herança de R$ ${props.inheritance} que recebi do meu bisavô`}
      </span>
    </div>
  );
}
```

Até aí, é um código React padrão. Há um componente `GreatGrandfather` que mantém estado, e esse estado é passado através de props até o componente que precisa utilizá-lo, `Daughter` . Mas qual é o problema com essa estrutura?

`GreatGrandfather` , que mantém o estado, está no nível mais alto da árvore, enquanto `Daughter` , que utiliza este estado, está três níveis abaixo. Por isso, somos obrigados a passar o dado por toda a árvore de componentes. `Grandmother` e `Father` não utilizam essse dado, mas precisam recebê-lo e repassá-lo para seus filhos, pois existe um componente abaixo na árvore que necessita dele. Esse processo é comumente chamado de `prop drilling` , porque você está "perfurando" ( drilling ) vários componentes com props apenas para que os dados cheguem até o componente que faz uso deles.

Vamos supor agora que você queira permitir que `Daughter` não só tenha acesso ao valor da herança, mas que possa também gastá-la. Como faríamos isso? A herança é parte do estado de `GreatGrandfather` , então somente esse componente pode alterá-la, utilizando o método `setState` . Contudo, o componente que de fato tomará a iniciativa de atualizar o estado está três níveis abaixo na árvore. A solução é criar um handler em `GrandGreatfather` e passá-lo como callback por todos os componentes na árvore até `Daughter` , incorrendo mais uma vez em prop drilling .

```javascript
import React, { Component } from 'react';

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => (
      { inheritance: prevState.inheritance - 1000 }
    ));
  }

  render() {
    return (
      <Grandmother
        inheritance={this.state.inheritance}
        spendInheritance={this.spendInheritance}
      />
    );
  }
}

function Grandmother(props) {
  return (
    <Father
      inheritance={props.inheritance}
      spendInheritance={props.spendInheritance}
    />
  );
}

function Father(props) {
  return (
    <Daughter
      inheritance={props.inheritance}
      spendInheritance={props.spendInheritance}
    />
  );
}

function Daughter(props) {
  return (
    <div>
      <span>
        `Tenho uma herança de R$ ${props.inheritance} que recebi do meu bisavô`
      </span>
      <button type="button" onClick={props.spendInheritance}>
        Gastar Herança!
      </button>
    </div>
  );
}
```

É claro, isso é um processo lento, tedioso e propenso a erros. Se você errar o nome de alguma prop, por exemplo, vai gastar um tempo tentando descobrir em que ponto a passagem de props está errada.

Passar props por um ou dois níveis na árvore é aceitável, mas, à medida que o número de componentes e o nível de aninhamento na árvore aumenta, prop drilling torna-se insustentável. Se não se convenceu ainda, tente imaginar o seguinte, no nosso exemplo:
- Cada pessoa agora tem múltiplos filhos. Ou seja, abaixo do bisavô, há multiplos avôs, e abaixo de cada um há vários pais, que por sua vez possuem múltiplos filhos.
- Há bem mais de três níveis na árvore genealógica de componentes.
- O estado agora é composto de 5 propriedades, ao invés de uma. Para cada propriedade, há um método handler que lida com alterações em seu valor.
- Todos esses campos do estado e todos os seus handlers precisam ser passados como prop por todos os componentes na árvore porque agora todos querem ser capazes de ler e atualizar os dados no estado de `GreatGrandFather` .
- Seu linter lhe recomenda sempre declarar as PropTypes de um componente. Você vai ter que fazer isso para todos as props em todos os componentes, mesmo aquelas que só são repassadas para os níveis mais baixos.
