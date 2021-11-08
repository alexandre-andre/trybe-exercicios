# If/Else
Basicamente é: `if` x faz isso, senão `else` faz aquilo.
```javascript
const ang1 = 70 
const ang2 = 30
const ang3 = 199
let triangulo = ang1 + ang2 + ang3
if(triangulo == 360){
    console.log("É um triangulo")
}else{
    console.error("NÃO é um triangulo")
}

if(ang1 < 180 || ang1 < 0){
    console.log("ang1 corresponde ao valor angular de um triangulo")
}else{
    console.error("ang1 não corresponde ao valor angular de um triangulo")
}

if(ang2 < 180 || ang2 < 0){
    console.log("ang2 corresponde ao valor angular de um triangulo")
}else{
    console.error("ang2 corresponde ao valor angular de um triangulo")
}

if(ang3 < 180 || ang3 < 0){
    console.log("ang3 corresponde ao valor angular de um triangulo")
}else{
    console.error("ang3 não corresponde ao valor angular de um triangulo")
}
```