# Sintaxe geral com typeScript
```ts
class Person { // cria a classe
  name: string;
  height: number;
  weight: number;

  // ATRIBUTOS
  constructor(n: string, h: number, w: number) {
    this.name = n;  // THIS serve para representar o objeto em si
    this.height = h;
    this.weight = w;
  }

  // MÉTODO
  sleep() {
    console.log(`${this.name}: zzzzzzzzz`);
 }
}

const p1 = new Person('Maria', 171, 58); // NEW permite a criação de um novo objeto
const p2 = new Person('João', 175, 66); // NEW permite a criação de um novo objeto
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep(); // cada objeto possui seus MÉTODOS
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/
```