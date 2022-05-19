# Pratica
Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote Node.js com o npm init chamado my-scripts. Realize os exercícios dentro desse pacote.
1. 🚀 Crie um script para calcular o Índice de Massa Corporal (IMC) de uma pessoa.
   - A fórmula para calcular o IMC é peso / altura ^ 2. Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
   - Comece criando um novo pacote node com npm init e respondendo às perguntas do npm.
   - Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura.
   - Armazene o script no arquivo imc.js.
2. 🚀 Agora, permita que o script seja executado através do comando npm run imc
   - O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js.
3. 🚀 Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
   - Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?
   - Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.
4. 🚀 Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
   - O` pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o mét`odo adequado para realizar input de floats.
   - Encontrou a função? Show! Agora utilize-a para solicitar o input de peso.
5. 🚀 Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
   - Considere a seguinte tabela para classificar a situação do IMC:
| IMC |	Situação |
|-----|----------|
|Abaixo de 18,5    |	Abaixo do peso (magreza) |
|Entre 18,5 e 24,9 |	Peso normal              |
|Entre 25,0 e 29,9 |	Acima do peso (sobrepeso)|
|Entre 30,0 e 34,9 |	Obesidade grau I         |
|Entre 35,0 e 39,9 |	Obesidade grau II        |
|40,0 e acima	     |  Obesidade graus III e IV |
6. Crie um script para calcular a velocidade média de um carro numa corrida. 
   - A fórmula para calcular velocidade média é distância / tempo. 
   - Armazene o script no arquivo velocidade.js.
   - Agora, permita que o script seja executado através do comando npm run velocidade. Para isso, crie a chave velocidade dentro do objeto scripts no package.json.
   - Utilize o readline-sync para solicitar os dados à pessoa.
   - Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.
7. Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado.
   - O script deve ser executado através do comando npm run sorteio.
   - Utilize o readline-sync para realizar input de dados.
   - Armazene o script em sorteio.js.
   - O número gerado deve ser um inteiro entre 0 e 10.
   - Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
   - Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
   - Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.
8. Crie um arquivo index.js que pergunta qual script deve ser executado.
   - O script deve ser acionado através do comando npm start.
   - Utilize o readline-sync para realizar o input de dados.
   - Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.
   - Ao digitar o número de um script e pressionar enter, o script deve ser executado.
   - Você pode utilizar o require para executar o script em questão..


