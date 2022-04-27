# Como funciona o sistema de camadas de uma imagem?
Quando fazemos o download de uma imagem (por exemplo, com o comando docker pull <imagem> , que baixa a imagem, mas não cria nenhum container) , podemos perceber nesse processo, a existência de vários downloads e extrações acontecendo. Cada um desses downloads representa uma camada.

O Docker divide suas imagens em camadas para que elas possam ser reaproveitadas por outras imagens e não precisem ser instaladas em duplicidade.

Como em praticamente toda instância dentro Docker , cada camada também é representada por um código único (uma hash).

Exemplo: A distribuição *linux Alpine* é muito utilizada em imagens do Docker por ser uma distribuição que possui somente o essencial para seu funcionamento, o que torna ela uma opção leve, rápida, simples e segura.

Há o reaproveitamento das camadas da distro Alpine pela imagem do Node e, sucessivamente pelas imagens que sejam derivadas deste . Quaisquer outras imagens que tenham etapas iguais a alguma das anteriores também vão aproveitar aquelas que já estão salvas no disco.

Dessa forma, o Docker consegue economizar espaço em disco não precisando baixar mais camadas em duplicidade.

Um ponto importante sobre as camadas é que aquelas que pertencem a imagem são somente para leitura , ou seja, você não consegue escrever nada nelas.

Porém, se acessarmos um container de modo interativo, (por exemplo, com `docker run -it ubuntu` ), e fizermos atualizações (com o `apt-get` ) ou criarmos novos arquivos, **estes serão persistentes mesmo se reiniciarmos o container**.



## Testando
```
docker run --name meu_container -it ubuntu
```

No terminal do container criado, rode o seguinte comando para criar um arquivo de texto, já com um conteúdo dentro:
```
echo "Teste container" > ola_munto.txt
```

Verifique se o arquivo foi criado, consultando seu conteúdo com o comando `cat` :
```
cat ola_mundo.txt
```

Assim que o terminal imprimir a mensagem *Teste container* , encerre o terminal com o comando `exit` ;

Esse comando deve inativar o container, que estava ativo por conta dessa interação;

Até aqui, entendemos que **houve escrita na área reservada para isso no container** , portanto, se iniciarmos o container novamente:
```
docker start -ai meu_container
# Aqui passamos o parâmetro `-ai` ao comando `start`,
# para dizer que queremos acoplar ao container (`a`, de 'attach'),
# de modo interativo (`i`, de 'interactive').
```

E rodarmos novamente o comando cat no terminal interativo para imprimir o conteúdo do nosso arquivo:
```
cat ola_mundo.txt
```

A mensagem *Teste container* vai aparecer novamente, logo, o arquivo ola_mundo.txt persistirá mesmo ao reiniciarmos o container.

> **Não é possível escrever nas camadas de uma imagem**, mas todas as vezes que criamos um container, uma camada extra (“container layer” - camada do container) é adicionada aquela imagem para que seja possível ler e escrever nela:

Dessa forma conseguimos ter vários containers trabalhando em cima de uma mesma imagem , dado que cada "*container layer*" possui seu próprio espaço para leitura/escrita.
