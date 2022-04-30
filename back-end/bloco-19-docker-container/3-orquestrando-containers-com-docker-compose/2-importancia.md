# Importância
Em um ecossistema de aplicações com várias linguagens de programação e tecnologias distintas rodando em seus respectivos containers , o **Docker Compose** entra como uma solução que consegue organizar o funcionamento e a configuração de todas essas partes que compõem um sistema.

Usando o **Compose** , definimos em um arquivo de configuração `YAML` todos os detalhes para executar nosso ambiente de desenvolvimento local, aproveitando todas as vantagens do **Docker** , sem se preocupar em subir cada um dos containers que envolvem um app com seus parâmetros específicos no `run` .

Além disso, nossos ambientes geralmente possuem vários serviços que precisam se comunicar entre si, por exemplo, um back-end com um front-end ou um serviço com um banco de dados. Nesse contexto, saber como trabalhar com networks pode ser muito vantajoso por nos permitir lidar com essa comunicação entre containers mais facilmente.

Outro componente importante sÃo os **Volumes**, que são componentes do **Docker** responsáveis por prover a *preservação de informações*.