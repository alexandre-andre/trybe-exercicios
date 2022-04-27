# O que é o Docker Compose?
Com o **Dockerfile** aprendemos a criar nossas imagens, de maneira unitária, ou seja, especificávamos as definições de uma determinada imagem. Tínhamos uma imagem para cada "tipo" de container , por exemplo, um container para nosso app , outro para nosso frontend , outro para nosso banco de dados e assim por diante.

Com o **Docker Compose** , criamos a especificação de todo o ambiente. Por exemplo, definimos quais containers irão rodar e a partir de qual imagem eles serão criados. Se for a partir de um código local podemos ainda configurar para que ele crie a imagem para a gente a partir do *Dockerfile* . Repare que *um não exclui o outro*, pelo contrário, o arquivo do *Compose irá trabalhar juntamente com o Dockerfile* .

> `Dockerfile` é um arquivo de texto simples que contém os comandos que um usuário pode chamar para montar uma imagem, enquanto o `Docker Compose` é uma ferramenta para definir e executar aplicativos *Docker* de vários containers .

O **Docker Compose** *é um orquestrador de containers*, uma ferramenta para definir e rodar aplicações multi-containers Docker . Com ele, podemos automatizar a implantação e gerenciamento dos containers .

Assim como uma receita, o Compose indica os ingredientes (componentes) e o modo de preparo (ordem de execução), pelos quais conseguimos subir todo nosso ambiente executando apenas um comando, facilitando a execução de um conjunto de containers .

Para isso, usamos um único arquivo `YAML` com todos os detalhes e especificações para "subirmos" todos os serviços de um ambiente em uma certa ordem pré-determinada, sem a necessidade de subir cada um dos containers que compõe a aplicação com seus parâmetros específicos no `run` .
