# Importância
Uma **imagem** é um arquivo **imutável** e a partir dele um ou mais containers podem ser gerados. Uma imagem do Docker é criada a partir do processo de `build` * de um arquivo chamado `Dockerfile` **.

Frequentemente no contexto de programação, o termo build ('construir' em português) se refere ao trabalho de pegar aquele conjunto de instruções que definimos antes (o nosso "script", "código fonte"), e a partir dele, construir um produto que seja executável de maneira mais simples - que por tanto, é melhor para distribuir.

Veremos mais adiante, mas o Dockerfile é um arquivo que contém as instruções necessárias (como um "script") para que rodemos uma aplicação: Sistema Operacional (SO) utilizado, bibliotecas que devem ser instaladas, arquivos que devem ser inicializados, etc.



Um **contêiner** , é como se fosse um contexto (ativo ou inativo) de uma aplicação, esse contexto, **é baseado em uma imagem** , exemplo:

Um container que é baseado em Linux e que tem o Node.js instalado e configurado (imagem node ) , para que minha aplicação em React funcione corretamente;

Se rodarmos um container com `docker run <imagem>` , mas não tivermos essa <imagem> (vamos supor aqui o hello-world ) localmente , ele nos retorna a seguinte mensagem:
```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
```

Essa mensagem, indica que o Docker baixou e armazenou a imagem localmente. A partir daí, sempre que o Docker precisar de uma referência daquela imagem, ele usará uma cópia local dela para trabalhar.
