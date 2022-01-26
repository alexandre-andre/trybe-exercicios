# Instalação do React
A primeira coisa a se saber é que npm é o gerenciador de pacotes em si, ou seja, ele é quem será utilizado para instalar os pacotes em nossas aplicações React, enquanto o `npx` executa o comando de um pacote sem instalá-lo em si.


Como o `create-react-app` é um pacote que a única coisa que faz é criar todos os arquivos necessários para termos um app React, não rodamos ele mais de uma vez por projeto, nem precisamos do pacote instalado em nossas máquinas, por isso **SEMPRE** executamos ele com o `npx` e não com o `npm` .

Caso tenha ocorrido algum erro, verifique qual foi seu tipo de erro e siga algum dos passos a seguir, caso contrário pule essa parte e siga para a parte Continuando o teste .
- Se seu problema foi com versionamento, siga para Instalando o `nvm`
- Se seu problema é ao digitar `npm start` , em geral esse erro ocorre porque existe uma pasta node_modules no diretório pai. Verifique se no erro ele indica um caminho parecido com /home/minhaPastaPessoal/node_modules/babel-jest, acesse a minhaPastaPessoal, delete a node_modules, acesse a pasta testando-meu-computador e rode o comando `npm start` novamente.


## Instalando o nvm
**Atenção**: Só realize esse passo se você teve algum problema de versionamento ao rodar o comando do passo anterior. Caso contrário siga para "Continuando o teste" .
Para instalar o `nvm` vamos seguir quatro passos (o segundo é muito importante, não deixe de fazer !)

1. Primeiro vamos rodar o comando abaixo no terminal.
Nota: Caso você utilize outro terminal que não seja o bash , troque, no comando, o bash pelo nome do terminal que está utilizando. Por exemplo, se você está usando o zsh , troque bash por zsh .
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

2. Vamos fechar TODAS as abas abertas do terminal. Elas precisam ser fechadas para que o script do passo anterior seja carregado no terminal.
3. Agora vamos abrir novamente o terminal e rodar o comando abaixo. Esse comando retornará a versão do nvm que acabamos de instalar, como o da foto na sequência:
```
nvm --version
```

Caso apareça a mensagem `bash: command not found: nvm`, volte ao segundo passo e o faça corretamente, fechando todas as abas de terminal que estiverem abertas.

4. Por fim, após todos os procedimentos bem sucedidos, vamos rodar o último comando:
```
nvm install --lts
```

Antes de seguir para a parte "Continuando o teste" , vamos rodar o comando abaixo, o mesmo que tinha dado erro antes, agora ele dará certo e poderemos prosseguir:
```
npx create-react-app testando-meu-computador
```

## Continuando o teste
Após o npx terminar de executar, ele nos mostra um mini tutorial, em que teremos uma explicação sobre os principais comandos.


Para finalizarmos os testes, vamos utilizar os comandos que estão sendo sugeridos no final do tutorial (certifique-se de que está dentro da pasta criada pelo comando npx ):
```
npm start
```
Após o npm start terminar de carregar (pode demorar um pouco), ele irá abrir uma aba em seu navegador e você verá algo parecido com o exemplo abaixo, o que significa que tudo está funcionando corretamente.

