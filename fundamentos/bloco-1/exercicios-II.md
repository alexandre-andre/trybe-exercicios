# Exercicios I
1. cat >> frutas.txt
maçã
laranja
2. Sobre o comando sort no terminal do unix é correto afirmar que:
3. Leia as seguintes afirmativas sobre o operador < no terminal do unix:
```
I- O operador < é útil para os casos em que é necessário modificar o arquivo original.
II- O operador < é utilizado para concatenar comandos.
III- O operador < é utilizado para direcionar comandos para arquivos.
IV- O operador < é útil para os casos em que é necessário manter o arquivo original intacto.

Quais dessas afirmativas estão corretas?
```
4. Complete as lacunas a seguir:
```
O comando ______ pode ser utilizado para ______. Ele ainda exibe no terminal informações como ______ e _______.
```
5. Juliana quer utilizar um operador no terminal para que um comando sirva de entrada para outro comando. Analise as afirmações a seguir e assinale V para verdadeiro e F para falso:
```
O comando & pode fazer a concatenação dos comandos para Juliana.
Juliana pode utilizar o operador |.
Juliana pode utilizar o operador &&.
```
6. Sobre o comando ls -l é correto afirmar que:
7. Complete as lacunas a seguir:
```
O comando ______ é utilizado para pausar um processo por um período de tempo. O padrão desse período de tempo é dado em ______.
```
8. Para que serve o operador & ?
9. Qual atalho utilizamos no terminal para suspender um processo atualmente em execução?
10. Leia as seguintes afirmativas sobre o comando find:
```
I - find . -type d lista todos os arquivos.
II - find . -name "*.txt" lista todos os arquivos com a extensão .txt.
III - find ./teste -type d -name "exemplo*" lista todos os arquivos que comecem com a palavra "exemplo".
IV - find ./teste -type f -name "exemplo*" lista todos os arquivos que comecem com a palavra "exemplo".

Quais dessas afirmativas estão corretas?
```

### Gabarito - exercicios I
1. O comando cat >> é capaz de editar um arquivo adicionando informações ao 
seu final.
2. O comando sort irá ordenar o conteúdo do arquivo dataOne.txt e redirecionar a saída para o arquivo dataTwo.txt modificando-o.
3. III e IV.
4. who, listar os usuários logados, data, hora de entrada no sistema.
5. F, V, F.
6. O "r" vem da palavra em inglês "read" e significa que a pessoa usuária tempermissão para ler o arquivo, enquanto o "w" vem da palavra em inglês"write" e indica que a pessoa usuária pode modificá-lo.
7. sleep, segundos.
8. Para executar um processo em background.
9. Podemos suspender um processo sendo executado no terminal utilizando o atalho Ctrl + Z.
10. Para se listar todos os arquivos com a extensão .txt podemos utilizar o comando -name "*.txt". Alem disso, utilizamos o comando find ./teste -type f -name "exemplo*" quando precisamos listar todos os arquivos que comecem com a palavra "exemplo".


# Exercicios II
1. Leia as seguintes afirmações sobre as funções que o shell desempenha:
```
I - Interpreta os significados de comandos.
II - Executa os comandos.
III - Inicializa o sistema operacional.
IV - Retorna resultados de comandos para a pessoa usuária.
Quais dessas afirmativas estão corretas?
```
2. Sobre as informações que um arquivo unix possui, é correto afirmar que:
3. Marque a alternativa que melhor descreve a saída do comando head -15 myFile.txt no terminal unix:
4. Para buscar um trecho de código ou uma frase em algum arquivo no unix, podemos usar o comando:
5. Leia as seguintes afirmativas sobre o comando wc:
```
I - wc -l <arquivo> retorna o número de linhas.
II - wc -m <arquivo> retorna o número de palavras.
III - wc -w <arquivo> retorna o número de caracteres.
IV - wc <arquivo> retorna o número de linhas, palavras e bytes, nessa ordem.
Quais dessas afirmativas estão corretas?
```
6. Observe atentamente o comando a seguir:
sort < arquivo1 > arquivo2
Após a execução do comando acima é correto afirmar que?
7. Complete as lacunas a seguir:
```
Para se executar uma sequência de comandos e ______, utilizamos os operadores ______ e ______, respectivamente.
```
8. Complete as lacunas a seguir:
```
O operador ______ pode ser utilizado para ______ um processo ______, fazendo com que o terminal fique ______ para a utilização da pessoa usuária.
```
9. Marque a alternativa correta sobre a utilização do comando jobs no terminal do unix:
10. Sobre o comando echo, é correto afirmar que:

### Gabarito - exercicio II
1. I, II e IV.
2. "Read" e "write" são exemplos de permissões de arquivos no unix.
3. O comando head -15 myFile.txt irá listar no terminal as quinze primeiras linhas do arquivo.
4. Ao se utilizar o comando grep trechoBuscado nomeDoArquivo, o unix fará uma busca por "trechoBuscado" dentro do arquivo "nomeDoArquivo" e se este existir, o retornará no terminal para a pessoa usuária.
5. I e IV.
6. O arquivo1teria seu conteúdo ordenado sem ser modificado e sua saída seria redirecionada ao arquivo2, modificando-o.
7. O operador | é utilizado para realizar uma sequência de comandos, enquanto o operador > será responsável por redirecionar a saída desses comandos para um arquivo.
8. O operador & faz com que processos sejam executados em background o que torna possível o usuário continuar utilizando o terminal sem ter de esperar os processos serem encerrados.
9. Para visualizar todos os processos que estão sendo executados em segundo plano ou que estão suspensos, podemos utilizar o comando jobs.
10. O comando echo pode ser utilizado para imprimir informações no terminal.


# Parte I Comandos de Input e Output
1. Navegue até a pasta unix_tests;
2. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione osvalores Internet, Unix e Bash, um em cada linha.
3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.
4. Conte quantas linhas tem o arquivo skills2.txt.
5. Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.
6. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.
7. Conte o número de linhas que contêm as letras br.
8. Conte o número de linhas que não contêm as letras br.
9. Adicione dois nomes de países ao final do arquivo phrases2.txt.
10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
11. Ordene o arquivo bunch_of_things.txt.


# Parte II - Permissões
1. Navegue até a pasta unix_tests ;
2. Rode o comando ls -l e veja quais as permissões dos arquivos;
3. Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;
```
Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
```
4. Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;
```
Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
```
5. Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .
```
Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
```
