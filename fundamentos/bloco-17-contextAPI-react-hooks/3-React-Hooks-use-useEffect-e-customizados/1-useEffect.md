# `useEffet`
Uma das ferramentas mais interessantes do React é a possibilidade de manipulação dos ciclos de vida de seus componentes. Até o momento, estas alterações eram feitas através dos ***lifecycle methods*** , conhecidos como `componentDidMount , componentDidUpdate e componentWillUnmount` .

O hook `useEffect` foi desenvolvido para ser uma função que pode ser executada em diferentes momentos do ciclo de vida dos componentes de forma semelhante aos três métodos. A documentação do ReactJS se refere à esta ferramenta da seguinte forma:
> Se você tem familiaridade com métodos de ciclo de vida de React, você pode entender o hook useEffect como uma junção de componentDidMount, componentDidUpdate e componentWillUnmount (Tradução livre).

O hook Effect leva este nome por lidar com os efeitos colaterais que são produzidos na aplicação diante de um evento ou variável que precisa ser observada, seja ele a *montagem do componente*, a *alteração de um estado* ou a *desmontagem de um componente*.

Para que isso aconteça o hook recebe, geralmente, dois parâmetros, que são uma callback e um array:
```javascript
useEffect(() => {}, []);
```

> A função será executada de acordo com o que especificarmos como segundo parâmetro.


## useEffect sem array
```javascript
useEffect(() => {})
```
> Esta configuração executará a função toda vez que o componente sofrer qualquer tipo de alteração e renderizar, **repetidas vezes**. Ela precisa ser utilizada com **cautela**, pois facilmente resulta em **loops infinitos**.


## useEffect com array vazio === componentDidMount
```javascript
useEffect(() => {}, []);
```
 

## useEffect com array populado === componentDidUpdate
```javascript
useEffect(() => {}, [variável1, variável2, ... variávelN]);
```
> O comportamento deste modelo será semelhante ao `componentDidUpdate` e ele será executado sempre que houver mudança em alguma das variáveis especificadas.


## useEffect retornando outra função e um segundo parâmetro um array populado ou não
```javascript
useEffect(() => {

  return () => {}
}, []);
```
> Este caso é mais específico, pois ele pode agregar a utilização de um dos dois últimos exemplos, o `componentDidMount` ou `componentDidUpdate` *dependendo do segundo parâmetro*, e a função presente no retorno se comporta como `componentWillUnmount`. Ou seja, quando o componente desmonta a função retornada pelo `useEffect` é executada. Você deve definir essa função sempre que precisar limpar algo criado por seu efeito (como algum _timer_, por exemplo)

```javascript
// DiMount
// o ideal eh q a funcao assincrona seja chamada e executada DENTRO da callback do useEffect
useEffect( () => {
  const getApi = async () => {
    const data = await fetch(endPoint).then((response) => response.json());
    console.log(data);
    setBla getApi(data); // setar o estado do hook
  }
}, []);

// DidMount + DidUpdate
// vai chamar o useEffect na hora que for montar o componente e vai ver se existe alguma depencencia 
// essa dependencia ficará sendo observada, toda vez que essa dependencia sofrer alguma alteracao a funcao do useEffect serah executada
useEffect(() => {
  const getApi = async () => {
    const data = await fetch(endPoint).then((reponse) => response.json());
    console.log(data);
    setBla getApi(data); // seta no state bla a reposta da API
  }
}, [limit]); // dependencia do useEffect === shouldUpdate

// DidUpdate
// quando omitimos a lista de dependencias, o useEffect será executado
useEffect(() => console.log('atualizou'), [state1, state2, ..., sataN]); // ou
useEffect(() => console.log('atualizou'));

// WillUnmount
// o que será executado na hora de desmontar o componente tem que ser o retorno da funcao que está sendo passada para o useEffect
useEffect(() => {
  return () => {
    // desmonta o componente
  }
}, []);
```


# Exemplo de aplicação
## Para fixar
Faça um componente funcional React com as seguintes funcionalidades:
- A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;
- Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;
- A mensagem de acerto é removida 4 segundos depois de ser exibida;
- O timer é removido quando o componente é desmontado.


```javascript
// src/App.js
import React from 'react';
import useTimer from './hookts/useTimer'; // funcao useTimer

function App() {
  const {number, isMultiple, timer} = useTimer(); // da useTimer pega os estados retornados
  return (
    <>
      <p>{`Random number: ${number}`}</p>
      <p>{ isMultiple $$ 'Acerto'}</p>
      <p>Tempo: {timer}</p>
    </>
  )
}
export default App;
```

```javascript
// src/hooks/useTimer.js
import { useState, useEffect } from 'react';

function useTimer() {
  const [timer, setTimer] = useState(1);
  const [number, setNumber] = useState(1);
  const [isMultiple, setIsMultiple] = useState(false);
  
  const TIMER_INTERVAL = 1000;
  const NUMBER_TIMEOUT = 10000;
  const MESSAGE_TIMEOUT = 4000;
  const MIN_RANDOM = 1;
  const MAX_RANDOM = 100;

  const incressTimerInterval = () => setTimer((timer) => timer + 1); // seta a chave timer em + 1

  const verifyMultiple = randomNumber => { // recebe um param
    if(randomNumber % 3 === 0 && randomNumber % 5 === 0) { // verifica se esse param atende a determinado caso
      setIsMultiple(true); // seta isMultiple para true 
      setTimeout(() => setIsMultiple(false, MESSAGE_TIMEOUT)); // seta isMultiple para false e corre x milisegundos no setTimeOut
    }
  };

  const handleRandomNumber = () => {
    /* O Math.random retorna um valor entre 0 e 1, com o 0 incluso, então o cálculo será multiplicar o valor aleatório por 100, e com o uso do Math.floor o resultado será um valor entre 0 e 99, após somar mais 1, o menor valor será 1 e o maior valor será 100 */
    const randomNumber = () => Math.round(Math.floor(Math.random() * 100) + MIN_RANDOM);
    verifyMultiple(randomNumber); // recebe randomNumber como param
    setNumber(randomNumber); // recebe randomNumber como param
    setTimer(0); // seta o timer para 0
  }

  useEffect(() => { // comportamento de DidMount
    const interval = setInterval(handleRandomNumber, NUMBER_TIMEOUT); // pega o handle e sai em 4s
    const setTimerInterval = setInterval(incressTimerInterval, TIMER_INTERVAL); // add + 1 em timer a cada 1s

    return () => {
      clearInterval(interval);
      clearInterval(setTimerInterval);
    };
  }, []);

  return {number, isMultiple, timer};
}

export default userTimer;
```