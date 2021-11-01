# Agrupamento de seletores
Podemos agrupar seletror no css para determinar configurações identicas a mais de um seletor
```html
<!-- configura seletor div -->
div{
    font-family: 'Montserrat';
}

<!-- configura seletor p-->
p {
    font-family: 'Montserrat';
}

<!-- configura seletores div e p-->
div, p{
    font-family: 'Montserrat';
}

<!-- configura seletor p dentro do seletor div -->
div p{
    font-family: 'Montserrat';
}

<!-- configura -->
div > p{

}
```

# Pseudoclasses
Uma pseudoclasse sempre vem com o nome do elemento `:` o que vier depois é chamado de pseudoclasse, como: `a:hover`.
```html
<!-- agrupamento de seletores -->
p.perigo{
    border: 5px solid yellow;
}

<!-- agrupamentos de seletores -->
ul.ingredientes li p{
    background-color: green;
    color: #fff;
}

<!-- pseudo classe
ao passar o mouse sobre o li o background ficará azul -->
li:hover{
    background-color: blue;
}

<!-- pseudoclasse 
ao clicar no elemento li a cor será mudada para branco, é um modo de ativação
muito usado em links -->
li:active{
    color: #fff;
    transition: 0.5s;
}

<!-- pseudoclasse 
da foco ao elemento ao ser clicado -->
button.input:focus{
    background-color: yellow;
    border: 1px solid red;
    transition: 0.4;
}
```
*DICA: Experimente colocar a propriedade transition nos seus estilos que possuem pseudoclasses.*

[developer mozilla](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes)
[n-ésimo item](https://www.treinaweb.com.br/blog/truques-de-como-selecionar-o-n-esimo-item-com-css-usando-a-pseudo-classe-nth-child)