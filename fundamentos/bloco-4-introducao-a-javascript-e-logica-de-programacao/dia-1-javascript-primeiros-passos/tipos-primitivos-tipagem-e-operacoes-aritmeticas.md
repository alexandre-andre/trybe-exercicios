# Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

## Tipos Primitivos e Tipagem Dinâmica
No exemplo abaixo, temos as informações de um paciente. Utilize o operador `typeof` para imprimir qual o tipo das variáveis `patientId` , `isEnrolled` , `patientInfo` e `patientEmail` . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: `console.log(typeof patientId)` retornará `number`.

```javascript
let patientId = 50;
let patientId2 = '50';
let isEnrolled = true;
const patientInfo = {
    firstName: 'Jack',
    lastName: 'Estripador'
}
const patientEmail = 'jackestripador@email.com';

console.log(typeof(patientAge));
// undefined

console.log(typeof(patientId));
//  number

console.log(typeof(patientId2));
// string

console.log(typeof(isEnrolled));
// boolean

console.log(typeof(patientInfo));
// object
```

## Tipos de Operadores
- `typeof` retorna o tipo da variável
- `instanceof` retorna _true_ se um objeto é uma instância de um tipo de objeto


# Operadores Aritméticos
- `+`	Addition
- `-`	Subtraction
- `*`	Multiplication
- `**`	Exponentiation (ES2016)
- `/`	Division
- `%`	Modulus (resulta em resto de uma divisão) 
- `++`	Increment
- `--`	Decrement

## Operadores de Atribuição
| operador | exemplo | é o mesmo que |
|----------|---------|---------------|
| `=`  | x=y | x=y |
| `+=` | x += y | x = x + y |
| `-=` | x -= y | x = x - y |
| `*=` | x *= y | x = x * y |
| `/=` | x /= y | x = x / y |
| `%=` | x %= y | x = x % y |
| `**=` | x **= y | x = x ** y |

## Operadores de Comparação
- `==`	equal to
- `===`	equal value and equal type
- `!=`	not equal
- `!==`	not equal value or not equal type
- `>`	greater than
- `<`	less than
- `>=`	greater than or equal to
- `<=`	less than or equal to
- `?`	ternary operator

## Operadores Lógicos
- `&&`	logical and
- `||`	logical or
- `!`	logical not


# Operadores Bit a Bit
|operador |descrição |exemplo |o mesmo que |resultado |decimal |
|---------|----------|--------|------------|----------|--------|
|&	|   AND	|   5 & 1   |	0101 & 0001     |	0001    |	 1 |
| (pipe)	|   OR	|   5 (pipe) 1	|   0101 (pipe) 0001	    |   0101    |	 5 |
|~	|   NOT |	~ 5	    |   ~0101           |	1010    |	 10|
|^	|   XOR	|   5 ^ 1   |	0101 ^ 0001     |	0100	|   4  |
|<< |   Zero fill left shift    |	5 << 1  |	0101 << 1   |	1010    |	 10|
|>> |   Signed right shift  |	5 >> 1      |	0101 >> 1   |	0010    |	  2|
|>>>|   Zero fill right shift   |	5 >>> 1	|   0101 >>> 1  |	0010    |	  2|