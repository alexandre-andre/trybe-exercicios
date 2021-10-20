1. Sobre o kernel do unix é correto afirmar que:
Uma das responsabilidades do kernel é fazer a interação entre os softwares e os hardwares do computador. Outras responsabilidades incluem o gerenciamento da memória, de processos e arquivos.

2. Identifique qual dos itens abaixo traz informações corretas a respeito do terminal do unix.
Na interface de linha de comando é possível digitar comandos de texto que funcionam como instruções para o computador executar funções específicas.
Na CLI, ou interface de linha de comando, a pessoa usuária pode digitar comandos que são interpretados pelo sistema para executar funções específicas.

3. Dentre os itens abaixo, marque a opção que descreve corretamente a ordem das quatro principais funções do shell.
O shell primeiro faz a leitura do comando, na sequência ele o interpreta, executa e, por fim, retorna o resultado para a pessoa usuária.

4. Assinale a alternativa que completa corretamente as lacunas a seguir:
O unix interpreta cada tarefa ou comando como um ______. Cada processo possui um identificador único chamado ______, que reúne informações como o ______, ______ e ______.
Processo, PID (Process IDentifier), usuário proprietário, sessão do shell e estado atual.

5. Sobre o sistema de arquivos do unix é correto afirmar que:
O sistema de arquivos do unix é organizado em um sistema de raiz, onde o nível mais alto é o / (barra ou root).

6. Leia as seguintes afirmativas sobre informações de um arquivo unix:
A data e a hora da última modificação do arquivo são exemplos de informações que um arquivo unix possui.
O tipo de arquivo e suas permissões são exemplos de informações que um arquivo unix possui.
Tanto o nome do arquivo, quanto o nome do usuário proprietário, são exemplos de informações que um arquivo unix possui.

7. Sobre o diretório /boot no unix é correto afirmar que:
O Boot representa os arquivos de configuração para a inicialização do sistema.

8. Sobre o diretório /home do unix é correto afirmar que:
Cada usuário do sistema, incluindo o usuário root, possui uma subpasta dentro do diretório _/home_.

9. Leia as seguintes afirmativas sobre o diretório /usr no linux:
No diretório _/usr_ são armazenados aplicativos e arquivos que, na maioria das vezes, são acessíveis a todos os usuários.
_/usr_ é uma sigla para a expressão em inglês "unix system resources" ou em português "recursos de sistema unix".
O diretório /usr pode conter executáveis, bibliotecas e até documentações de softwares utilizados pelos usuários ou administradores do sistema.

10. Sobre o diretório _/dev_ no linux é correto afirmar que:
No diretório _/dev_ são armazenados ficheiros especiais associados aos dispositivos do sistema, como por exemplo o disco rígido da máquina.

# Parte I - Criação de arquivos e diretórios
Dica : Para criação de arquivos vazios você pode utilizar o comando touch nome-do-arquivo.extensao .
1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
2. Crie um arquivo de texto com o nome trybe.txt .
3. Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
4. Renomeie o arquivo trybe.txt .
5. Dentro de unix_tests , crie um novo diretório chamado backup .
6. Mova o arquivo trybe_backup.txt para o diretório backup .
7. Dentro de unix_tests , crie um novo diretório chamado backup2 .
8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .
9. Apague a pasta backup .
10. Renomeie a pasta backup2 para backup .
11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
12. Apague o diretório backup .
13. Limpe o terminal.
Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :
Copiar
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
14. Mostre na tela as 5 primeiras skills do arquivo skills.txt .
15. Mostre na tela as 4 últimas skills do arquivo skills.txt .
16. Apague todos os arquivos que terminem em .txt .

Gabarito - Parte I
1. mkdir unix_tests
2. touch trybe.txt
3. cp trybe.txt trybe_backup.txt
4. mv trybe.txt <nome novo>
5. mkdir backup
6. mv trybe_backup.txt backup
7. mkdir backup2
8. mv /backup/trybe_backup.txt backup2
9. rm -rf backup
10. mv backup2 backup
11. pwd
12. rm -rf backup
13. clear
14. head -5 skills.txt
15. tail -4 skills.txt
16. rm -rf *.txt

# Parte II - Manipulação & Busca
1. Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
Copiar

```
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

2. Mostre todo o conteúdo do arquivo countries.txt na tela.
3. Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia.
4. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.
5. Busque por Brazil no countries.txt.
6. Busque novamente por brazil , mas agora utilizando o lower case.
7. Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.
8. Busque pelas frases que não contenham a palavra fox.
9. Conte o número de palavras do arquivo phrases.txt.
10. Conte o número de linhas do arquivo phrases.txt.
11. Crie os arquivos empty.tbt e empty.pdf.
12. Liste todos os arquivos do diretório unix_tests.
13. Liste todos os arquivos que terminem com txt.
14. Liste todos os arquivos que terminem com tbt ou txt.
15. Acesse o manual do comando ls.

## Gabarito - Parte II
1. 
```
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```
2. cat countries.txt
3. less countries.txt
4. less countries.txt
- - dentro do arquivo countries.txt `/<valor buscado>`
5. grep Brazil countries.txt
6. grep -i brazil countries.txt
7. grep -v fox phrases.txt
8. wc -w phrases.txt
9. wc -l phrases.txt
10. mkdir empty.tbt empty.pdf
11. ls -l
12. ls -l *txt
13. ls -l *txt *tbt
14. man ls