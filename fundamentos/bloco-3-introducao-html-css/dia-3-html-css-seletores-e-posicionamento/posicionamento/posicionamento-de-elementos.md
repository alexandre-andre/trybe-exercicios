# Posicionamento de elementos
- position: absolute; sobrepõe a imagem/texto sobre a(o) outra(o).
- z-index: 1; segue uma sequência numeral de sobreposição, começando pelo 1 que é o nível mais baixo

Exemplo:
```
.super-mario {
  width: 200px;
  position: absolute;
  z-index: 1;
}

.goomba {
  width: 100px;
  position: absolute;
  margin-top: 300px;
  z-index: 2;
}

.baloon {
 position: absolute;
 margin-left: 220px;
 z-index: 1;
}

.speach {
  font-size: 25px;
  position: absolute;
  margin-top: 65px;
  margin-left: 240px;
  z-index: 2;
}

.bowser {
  width: 200px;
  position: absolute;
  margin-left: 520px;
  margin-top: 130px;
}
```

[w3scholls](https://www.w3schools.com/cssref/pr_class_position.asp)