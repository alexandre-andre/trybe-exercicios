# Sintaxe de encapsulamento
```ts
class Person {
  name: string; // public
  private _weight: number; // private _
  private _age: number; // private _
  readonly height: number; // read only

  constructor(name: string, weight: number, age: number, height: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = heigth;
  }

  getHeight() { return this._weight };

  // GETTER
  // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() { return this._age };

  // SETTER
  // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birtday() { this._age += 1 };
}
const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);

// Alteração direta de variável pública
p1.name = 'Mariah';

// Acesso direto a variável pública
console.log(p1.name); // Maríah

// Acesso a método público que manipula atributo privado
console.log(p1.getWeight()); // 58

// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p2.age); // 18

// Acesso a método público que manipula atributo privado
p2.birthday(); 
console.log(p2.age); // 18 + 1 = 19

// Acesso a método com setter para manipular atributo privado como se fosse público
p2.age = 17;
console.log(p2.age); // 17

// Leitura de atributo readonly
console.log(p1.height); // 171

// A validação não deixa executar caso sua restrição não seja atendida
p2.age = 300;
console.log(p2.age); // 17
```


## Exemplo de sintaxes que são **inválidas** neste contexto:
```js
// Acesso externo à classe a atributo privado
p1._weight;
p1._weight = 1;

// Acesso a atributo inexistente
p1.weight;
p1.weight = 1;

// Escrita em atributo readonly
p1.height = 1;
```
