# Variáveis

- **var** variável de escopo de bloco
- **let** variáveis de escopo de bloco 
- **const** variáveis de escopo global e imutável  

> Dica: Com o plugin code runner que vimos no vídeo você pode executar o seu código no VS Code com o atalho ctrl + alt + n. Confira mais dicas sobre o VS Code [aqui](https://app.betrybe.com/course/real-life-engineer/vscode) !
1. Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
2. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
3. Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
4. Utilize o console.log() para imprimir as constantes e variáveis que você criou.
5. Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
6. Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

```javascript
const myName = 'André';
const birthCity = 'Rio de Janeiro - RJ';
let birthYear = 1989;

console.log(myName + ', ' + birthCity);
// André, Rio de Janeiro - RJ

birthYear = 2030;
console.log(birthYear);
// 2030

birthCity = 'São Paulo - SP';
console.log(birthCity);
// VM180:7 Uncaught TypeError: Assignment to constant variable.
// at <anonymous>:7:11
// (anonymous) @ VM180:7
```