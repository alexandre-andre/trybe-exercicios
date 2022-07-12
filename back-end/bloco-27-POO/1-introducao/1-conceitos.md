# Conceitos
`Classe` é o primeiro dos conceitos. Ela é utilizado para determinar algo genérico. Na programação orientada a objetos, toda classe tem como finalidade modelar com precisão a representação de uma entidade do mundo real. Um exemplo de uma classe é o conceito Pessoa. Isto quer dizer que somos `objetos` diferentes de uma mesma classe. `Objeto` **(ou instância da classe**) é algo específico.

Dentro das classes e dos objetos existem `atributos` e `métodos`. 
- `atributos`: altura e a massa da Pessoa.
  - A definição dos atributos é feita na classe, mas os valores são do objeto. Todas as pessoas possuem uma altura e uma massa, portanto a definição fica na classe.

Se um `atributo` representa um valor, como a altura de alguém, um `método` (ou **mensagem**) retrata uma *ação*. 
- `método`: uma pessoa pode dormir ou acordar.
  - Da mesma forma que o atributo, o método é algo que existe para a classe, mas cada objeto pode realizá-lo de forma diferente, única.

**Um `atributo` é uma variável criada numa classe**, e **um `método` é uma função criada numa classe**. Um método que merece destaque é o `método construtor`. Ele é rodado automaticamente na criação de um objeto, e serve para inicializar alguns atributos e chamar alguns métodos.


## Pilares da POO
### `abstração`
Indica que você não necessariamente precisa saber os detalhes de como algo funciona.

### `encapsulamento`
Faz com que alguns atributos só possam ser acessados e/ou modificados dentro da classe. Pense, por exemplo, na sua massa. Você não pode, diretamente, mudar sua massa. Não é possível você pensar "vou ter x kg" e você passar a ter essa massa. Entretanto, algumas interfaces para alterar essa massa são expostas. Você pode comer para aumentar a massa, e dentro de você, sem que possa ditar como seu corpo irá se comportar, ele vai absorver as calorias do alimento. Ou seja, não é possível mudar diretamente a sua massa, pois ela é um atributo privado da classe Pessoa, mas existem métodos na classe Pessoa que permitem que a massa seja alterada de forma interna, como o método comer.

### `herança`
Permite que classes `filhas`, que herdam métodos e atributos de outra classe (`super classe`), sejam criadas. Pense em uma classe *Pessoa*, com os atributos *nome* e *altura* e com o método *sonhar*. A partir dessa classe *Pessoa*, eu posso criar uma outra classe, chamada *PessoaCantora* , que herda de *Pessoa*. Ou seja, já virá automaticamente com os atributos *nome* e *altura* e com o método *sonhar*, mas poderá ter outro método exclusivo dela, como *cantar*.

### `poliformismo`
Permite que coisas diferentes aconteçam ao chamarmos objetos de classes `filhas` distintas de uma mesma `super classe`. Por exemplo, pense que existe a classe Pessoa, que possui um método dormir, só que esse método não é implementado (não possui nenhum código). Então são criadas duas outras classes:

*PessoaQueDormeDeBrucos* e *PessoaQueDormeDeLado*, e ambas implementam o método *dormir* conforme seus nomes. Se em algum lugar do código eu espero um objeto da classe *Pessoa*, eu posso perfeitamente passar um objeto de uma classe *filha* (já que ele **herda** tudo que tem na classe *Pessoa*).