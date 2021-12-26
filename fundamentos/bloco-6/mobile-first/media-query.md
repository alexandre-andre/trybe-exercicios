Sempre que estiver em uma determinada tela e ela atender a determinada condição o conteúdo dentro desse bloco será ativado.

@media screen and (max-width: 768px)
- @media => instrução de comportamento condicional ao CSS
- screen => tipo de media
  - **all** (padrão)
  - **print**
  - **screen**
  - **speech**
- and => operador lógico
  - **and**
  - **,**
  - **not**
- (max-width: 768px) => media feature
  - **viewport/page caracteristics**: min-width, max-width, height, aspect-ratio...
  - **display quality**: resolution, scan, grid...
  - **color**: inverted-colors, monochrome...
  - **interation**: any-pointer, any-hover...
  - ...

### Quando a tela tiver um tamanho máximo de até 768px o background será red
```css
@media screen and (max-width: 768px) {
    body {
        background-color: red
    }
}
```

### Quando a tela tiver um tamanho máximo de até 768px e minimo de 460px o background será red
```css
@media screen and (max-width: 768px) and (min-width: 460px) {
    body {
        background-color: red
    }
}
```


### Também é possível transportar o media query para dentro do HTML
Nesse caso foi criado um arquivo com a condicional do media query defino
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=width-device, initial-slace=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="mobile.css" media="screen and (max-width: 768px) and (min-width: 460px)">
</head>
```
