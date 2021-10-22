# Git
Git é um sistema de controle de versão distribuído (DVCS), o funcionamento dele é muito diferente dos outros sistemas que tentam cumprir o mesmo propósito. O git permite que um time trabalhe em um mesmo projeto ou em um mesmo arquivo e provê ferramentas para contornar a maioria dos problemas possíveis. 

- O que é Git ?
- Qual a principal diferença entre Git e outros VCS's ?
- Como configurar o Git na sua máquina ? 
- Como iniciar um repositório local?
- O que é o GitHub ?
- Como subir seu repositório local para o GitHub ?
- O que é Branch , Merge , Commit ?

- [Instalar e configurar o Git no seu computador](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git);
- Salvar seus projetos no repositório Git local;
- Controlar as alterações e versões dos seus arquivos;
- Enviar seus projetos para o repositório remoto do GitHub.

# Importância
Utilizando o Git, você e seu time vão conseguir colaborar de forma assíncrona e harmoniosa, ganhando produtividade no momento de "juntar (_merge_) as partes" que cada um fez e tendo segurança de que todo o trabalho realizado está salvo. Estar salvo depende de você sempre dar "push" (enviar as alterações para o repositório online) antes de sair com seu computador por aí, né? 😊

O GitHub , ferramenta online que hospeda repositórios Git , é uma excelente ferramenta para toda a gestão do seu código, tendo recursos para acompanhamento de projeto ágil de software, controle de Issues , quadros Kanban , Pull Requests que permitem um Code Review mais bem feito, entre outras dezenas de integrações que vão facilitar sua vida com desenvolvimento de software.

# Git e GitHUb

# Criar um projeto novo
- Criar uma nova pasta no PC pra isso chamada `Git Tutorial`
- Abrir o VSCode nessa pasta
- Criar um novo arquivo `README.md`
- Escrever dentro dele `Hello, world`
- Salva o arquivo
- Agora então é hora de usarmos o Git

Abre o Git Bash que foi instalado na máquina (pode ser pelo terminal do VSCode mesmo)
- `git init` para inicializar o repositório
- Foi criada uma pastinha .git e é ali que toda a mágica acontece, então não apague
- `git add README.md` para colocar o arquivo na área de stagging

Esse add é necessário antes de darmos o commit de fato, mas por que isso? No final do vídeo explico para vocês
- `git commit -m` "primeiro commit" para de fato dar o commit no repositório
- `git branch -M` "main" para alterar o nome da branch principal de master para main (isso é uma boa prática atualmente recomendada)

# Interfaces Git
Existem algumas interfaces legais do git que você pode fazer o download parapoder visualizar de fato como está o projeto, o que foi alterado em cadacommit, quando foi alterado etc.

# Repositório no Github
- Depois de você ter criado a sua conta na plataforma, você irá em `Criar novo repositório`

Preencher com as informações do projeto, então dar o nome do repositório, colocar uma breve descrição e criar

<img src="">

Logo depois vai aparecer essa página um pouco cinza e confusa e com vários comandos (pode até perceber que alguns deles jpa usamos), mas o que você tem que fazer é bem simples, apenas copie o link que aparecer para você

<img src"">

Lembra do conceito de `remote` que eu expliquei pra vocês no último vídeo? Nós iremos utilizá-lo agora
- Para passar o commit do meu repositório local (da minha máquina) para um repositório na plataforma do Github, usamos o git `remote add origin <link do repositório>`

- `origin` é o nome utilizado para referenciar o nosso repositório

Agora já temos o nosso repositório local conectado com o respositório do Github, porém o `commit` que damos na máquina não sobe automaticamente para a plataforma
- Para isso precisaremos empurrar, enviar para lá com o `git push -u origin main`
Agora se recarregarmos a página iremos ver o nosso arquivo aqui na plataforma!

# Alterando e adicionando arquivo

- Adiciona mais uma frase no arquivo `Essa é uma alteração`
- Além disso iremos criar um novo arquivo `Projeto.md`, onde escreveremos `Iniciando projeto`
- Agora então precisamos subir essa alteração, pra isso seguiremos os mesmos passos de `git add` . (agora ponto `.` pois adiciona todos os arquivos) e `git commit -m "primeiro commit"`
- Lembrando que para alterar algo no nosso respositório do Github precisamos dar o push, então `git push origin main` (sem o -u)

Se olharmos agora o nosso código no Github, ele terá sido alterado, e não só isso, se clicarmos no nome do `commit`, podemos ver exatamente as alterações que foram feitas nele. O verde com `+` e o vermelho com `-` mostra, os conteúdos que foram adicionados e editados dentro do código. Aqui nesse botão poderemos ver todos os commits já feitos anteriormente, então se clicarmos em algum deles, veremos exatamente o que havia sido alterado, além de claro, vermos o código como era.

# Branch
- Nesse caso vamos adicionar um novo arquivo para desenvolver a nossa feature `Botão`
- Então a primeira coisa que fazemos é `git checkout -b "novo-botao"`, assim criando uma branch para ele Esse comando além de criar a branch já entra nela com o checkout, inclusive se olharmos agora aqui no meu VSCode, estamos dentro dela.
- Vou então criar o arquivo, criar o `botão.md` "aqui eu crio o botão"
- E agora fazemos o passo a passo que já sabemos, colocamos a nossa alteração em stagging com o `git add .` e commitamos com o `git commit -m "novo botão"`
- Para enviarmos agora que vai ser diferente. Vocês lembram que utilizávamos o `git push orgin main`. Porém main era aquela branch principal. Agora então usaremos `git push origin botao`
Agora se olharmos o nosso Github, veremos que tem 2 branches, a `main` e a `botao`

Vamos supor que eu ainda não tivesse terminado de desenvolver o botão, eu poderia continuar tranquilamente na branch `botao` até terminar!

Mas Rafa, e se eu precisasse por algum motivo voltar naquela branch `main` e desenvolver a partir do que deixei lá? Sem problemas, a única coisa que você precisa fazer nesse caso é `git checkout main`, e pra voltar depois é só `git checkout botao` novamente

Beleza! Agora desenvolvi tudo o que queria aqui na branch `botao`, como que junto ela com a main sem problemas?

# Merge
- Na branch principal `git checkout main` e lá faremos o merge com a branch `botao` que criamos, com `git merge botao`
Pronto, agora tudo o que tinha de alteração na branch `botao` juntou com a main
- Para finalizar então, vamos jogar lá no Github isso tudo com o `git push origin main`

# Clone
Sempre que você entrar em um repositório, terá esse botão Code, que quando você clica aparece um link: `HTTPS`, `SSH` e `GitHub CLI`
- copiar esse link e levar ele lá pro nosso terminal
- O comando para puxar o projeto para a sua máquina é o git clone do link 
Não é necessário criar um repositório antes disso, como fizemos anteriormente com o `git init`. Dessa vez, basta abrir o terminal e clonar o projeto e tudo aparecerá!

# Pull
- `git pull` irá puxar todas as alterações realizadas no repositório.

# Fork
Mas e se eu fiz o clone do seu repositório ele não apareceu no meu Github. Existe a ferramenta `fork`, que é bem mais simples para fazer isso Você só precisa apertar nesse botão dentro do repositório e TCHANAM! Ele aparece automaticamente lá na sua conta:

# Pull Request
O último conceito que quero ensinar para vocês é o de Pull Request, vamos entender como ele funciona:
- Após você ter dado um fork no projeto e ele ter ido pra sua conta, você poderá alterar o projeto e adicionar as funcionalidades que deseja
- Você pode por exemplo dar um fork no meu repositório de `Formulário` para adicionar uma validação de campos ou qualquer outra coisa que acha válido
- Depois disso, você poderá salvar o projeto, dar o `git add .`, `git commit -m "validação de botões"` e `git push origin main`

Quando você for olhar o seu Github, verá que existe uma mensagem parecida com a seguinte:
```
this branch is 1 commit ahead of ...<main>
```

Daí agora vai aparecer o botão `Pull request`

Ele servirá para caso você deseje enviar para o dono do repositório original uma solicitação de pull, ou seja, fazer com que ele puxe as alterações que você fez no seu repositório para o repositório dele, original

Ao clicar nesse botão, você será direcionado para uma página que fará a avaliação se esse `pull request` terá conflitos ou não com o código no repositório original. Caso não tenha, bastão clicar no botão de `Create pull request`

# Comandos
- `git config` configura usuario
- `git help <comando>` `git <comando> help` ajuda
- `git init` inicia um repositório
- `git clone` clona repositório
- `git add` adiciona alteracao para iminente commit
- `git status` mostra o monitoramento do arquivo
```
# On branch master
# Untracked files:
# (use "git add {file}..." to include in what will be committed)
#
# README
nothing added to commit but untracked files present (use "git add" to track)
```
- `git diff` mostra as linhas exatas que foram alteradas - `patch`, por assim dizer 
- `git commit -m '<mensagem>'` Se usa o commit depois de já ter feito o git add, para fazer o commit
- `git commit -a -m '<mensagem>'` Para commitar também os arquivos versionados mesmo não estando no Stage basta adicionar o parâmetro -a
- `git commit -m '<mensagem>' --amend` O amend é destrutivo e só deve ser utilizado antes do commit ter sido enviado ao servidor remoto
- `git reset --hard HEAD~1` volta ao 'ultimo commit
- `git reset --soft HEAD~1` volta a o'ultimo commit e mantém os últimos arquivos no stage
- `git reset --hard <hash>`

### Recuerando commit apagado pelo git reset
- `git reflog` visualiza os hashs
- `git merge < hash>` mergea a hash
- `git rm` Para remover um arquivo do Git, você tem que removê-lo dos arquivos que estão sendo monitorados (mais precisamente, removê-lo da sua área de seleção) e então fazer o commit. O comando git rm faz isso e também remove o arquivo do seu diretório para você não ver ele como arquivo não monitorado (untracked file) na próxima vez.
- `git rm -f` Se você modificou o arquivo e já o adicionou na área de seleção, você deve forçar a remoção com a opção -f. Essa é uma funcionalidade de segurança para prevenir remoções acidentais de dados que ainda não foram gravados em um snapshot e não podem ser recuperados do Git.
- `git mv <arquivo>` renomear um arquivo no Git

### Branch e Merge
- `git branch <nome da branch>` cria um novo ponteiro para que você possa se mover
- `git checkout <nome da branch>` cria um novo ponteiro para o mesmo commit em que você está no momento.
- `git checkout -b <nome da branch>` mudar de branch, caso a branch ainda não exista você poderá passar o parâmetro -b para criar.
- `git merge <branch xx>` mergea a branch xx com o master 
- `git log` mostra historico de commits (autor e data)
- `git stash` Muitas vezes, quando você está trabalhando em uma parte do seu projeto, as coisas estão em um estado confuso e você quer mudar de branch por um tempo para trabalhar em outra coisa. O problema é, você não quer fazer o commit de um trabalho incompleto somente para voltar a ele mais tarde. A resposta para esse problema é o comando git stash.
Você quer mudar de branch, mas não quer fazer o commit do que você ainda está trabalhando; você irá fazer o stash das modificações
- `git status list` Seu diretório de trabalho estará limpo.
Neste momento, você pode facilmente mudar de branch e trabalhar em outra coisa; suas alterações estão armazenadas na sua pilha. Para ver as stashes que você guardou.
- `git tag` cria tags em pontos específicos na história do código como pontos importantes. Geralmente as pessoas usam esta funcionalidade para marcar pontos de release (v1.0, e por aí vai).
- `git tag -a v2.33 -m 'my version 2.33'` Para criar uma tag basta executar o seguinte comando, caso não queira criar a tag anotada, somente retire os parâmetros -a e -m.

### Compartilhar e atualizar projetos
- `git fetch origin` Esse comando vai até o projeto remoto e pega todos os dados que você ainda não tem. Depois de fazer isso, você deve ter referências para todos os branches desse remoto, onde você pode fazer o merge ou inspecionar a qualquer momento.
- `git pull` puxa as mudanças do Git
- `git push` empurra as mudanças para o Git

### Inspeção e Comparação
- `git show` mostra alterações do commit
- `git diff` mostra as alteracoes
- `git diff cached` se quiser ver o que selecionou que irá no próximo commit
- `git log` mostra historico de commits (autor e data)
- `git diff` mostra as linhas exatas que foram alteradas - `patch`, por assim dizer 

### Pacotes
- `git apply` pega um patch (por exemplo, a saída de git diff ) e aplica-o ao diretório de trabalho (ou index, se --index ou --cached for usado).
- `git am` pega uma caixa de correio de confirmações formatadas como mensagens de e-mail (por exemplo a saída  `git fomat-patch`)  e aplica-as as ramo atual.
- `git cherry-pick` aplica as mudanças introduzidas por alguns commits existentes
- `git diff` mostra as alteracoes
- `git rebase` reaplica commits em cima de uma outra ponta
- `git revert` reverte algum commit existente
- `git restore` restaura um commit 


### Referências
[Livro Oficial Git](https://git-scm.com/book/pt-br/v2)
[Documentação Git](https://git-scm.com/doc)
[Instalando o Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
[Configuração Inicial](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git)
[Chave SSH](https://medium.com/@rgdev/como-adicionar-uma-chave-ssh-na-sua-conta-do-github-linux-e0f19bbc4265)
