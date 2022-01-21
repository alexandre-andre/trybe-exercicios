# Lidando com erros em operações assíncronas

No exercício `ex-callbacks-assincrono.js` em callbacks, usamos em conjunto `callbacks` e `assincronicidade`, que nesse caso correspondem a:
- operação assíncrona: retorno de `user` depois de um certo tempo
- callbacks: as funções `userFullNames` e `userNationality`, que são chamadas depois que o usuário é retornado.

Como podemos garantir que essa requisição vai ocorrer sempre com sucesso quando solicitada de um outro servidor? 

E se houver uma falha de conexão? E se o servidor não estiver funcionando no momento da requisição?

Esses casos são exemplos de fatores externos, sobre os quais não se tem controle algum e que precisam ser tratados.

> Da mesma forma que se tem uma `callback` para quando a operação assíncrona tem sucesso, também precisaria ter uma callback para quando a operação assíncrona termina com erro.


### Lidando coo o erro
```javascript
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);
```
