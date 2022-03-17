# Render props

Atente para a sintaxe quando se utiliza um `Consumer` . Um componente **consumer** **deve** receber como *children* uma função. Essa função recebe como parâmetro o valor passado na prop `value` do `Provider` (nos exemplos acima, também chamamos o parâmetro da função de `value` , mas poderia ser qualquer nome) e deve retornar algo a ser renderizado.

Uma função em JavaScript é um valor como qualquer outro, e um componente pode receber como children um componente, uma tag HTML ou um valor JavaScript qualquer. Quando um componente recebe um valor, ele deve ser interpolado dentro de chaves {} . É exatamente isso o que foi feito no nosso exemplo.

Se essa sintaxe lhe parece estranha, lembre-se de que uma função em JavaScript é um valor como qualquer outro, e que um componente pode receber como children um componente, uma tag HTML ou um valor JavaScript qualquer. Quando um componente recebe um valor, ele deve ser interpolado dentro de chaves {} . É exatamente isso o que foi feito no nosso exemplo.
 
Esse é um pattern em React conhecido como render props . Na seção de recursos adicionais você encontrará materiais que explicam em detalhes como esse pattern funciona e algumas situações em que ele pode ser utilizado.

Como a aplicação poderia ser refatorada utilizando Context API.
```javascript
import React, { Component } from 'react';

const FamilyContext = React.createContext();

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => ({ inheritance: prevState.inheritance - 1000 }));
  }

  render() {
    const contextValue = {
      inheritance: this.state.inheritance,
      spendInheritance: this.spendInheritance
    };

    return (
      <FamilyContext.Provider value={contextValue}>
        <Grandmother />
      </FamilyContext.Provider>
    );
  }
}

function Grandmother(props) {
  return <Father />;
}

function Father(props) {
  return <Daughter />;
}

function Daughter() {
  return (
    <FamilyContext.Consumer>
      {({ inheritance, spendInheritance }) => (
        <div>
          <span>
            `Tenho uma herança de R$ ${inheritance} que recebi do meu bisavô`
          </span>
          <button type="button" onClick={spendInheritance}>
            Gastar Herança!
          </button>
        </div>
      )}
    </FamilyContext.Consumer>
  );
}
```

Observe que agora `Father` e `Daughter` não recebem **props**. `Daughter` acessa o estado diretamente, utilizando um `Consumer` . *Sem mais prop drilling* !
