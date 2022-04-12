# Importancia
Para o desenvolvimento de aplicações utilizamos diversas ferramentas e tecnologias, durante o ciclo de desenvolvimento é normal lidarmos com uma quantidade gigante ambientes distintos , principalmente em ambientes de desenvolvimento dinâmicos, onde ora o aplicativo roda em um sistema, ora roda em outro.

Esse cenário exige que, ao desenvolver uma aplicação, seja **necessário preparar e configurar todo o ambiente com as tecnologias necessárias, assim como integrá-las**.

Por exemplo, se uma pessoa desenvolve utilizando uma distribuição 'A' de Linux , outra utiliza Windows, outra utiliza Mac e no servidor roda uma distribuição 'B' de Linux, **todas elas estão trabalhando no mesmo projeto, e da mesma forma, estão disponibilizando-o para o ambiente de produção, em um servidor remoto comum** (Ao que damos o nome de *processo de deploy ou implantação* ).

Dessa maneira, é muito difícil garantir que o que funciona na máquina de uma pessoa funcionará na máquina de outra sem a necessidade de fazer novas configurações.

Inclusive, não conseguimos garantir também que funcionará nos servidores durante o processo de deploy .

Para resolver tais complexidades de compatibilidades, bem como economizar o tempo no processo de preparação de uma máquina para rodar um programa específico, **foi criado o Docker** .
  - Com ele, também conseguimos simular e testar facilmente um ambiente completo, podendo replicar tais configurações para outra máquina com facilidade.

> É bem provável que uma aplicação popular demande muitos recursos de uma máquina só, é por isso que existem técnicas que buscam aumentar esses recursos (por demanda), para que seja possível lidar com o processamento adicional.
> É o que chamamos de **escalabilidade vertical ou horizontal**! Falaremos disso mais adiante.

Por meio do **Docker** , **resolvemos o problema de incompatibilidade com outros sistemas**, ele funciona como uma espécie de "*empacotador*" de todas essas dependências e requisitos.

> No contexto de tecnologia informática, um `container` é uma espécie de "pacote" com tudo aquilo que seu software precisa para ser executado em um determinado ambiente. Falaremos disso mais adiante.

Saber Docker é essencial tanto para se adequar ao mercado como para aproveitar seus benefícios durante o ciclo de vida de nossas aplicações.
