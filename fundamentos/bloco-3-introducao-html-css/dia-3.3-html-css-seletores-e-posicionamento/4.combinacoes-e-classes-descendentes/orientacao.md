# Listar elementos filhos com pseudo seletor
`elemento:pseudo seletor(grupamento){ação}` seleciona em um bloco os elementos que serão alterados em forma de grupo ou quaisquer outras classificações.
- `li:nth-child(n){}` - seleciona em li todos os elementos li
- `li:nth-child(2n){}` ou `li:nth-child(even){}`- seleciona em li todos os elementos li pares
- `li:nth-child(2n + 1){}` ou `li:nth-child(odd){}` ou `li:nth-child(2n - 1){}` - seleciona em li todos os elementos li ímpares
- `li:nth-child(5){}` - seleciona em li o quinto elemento li
- `li:nth-child(n + 5){}` - seleciona em li todos os subsequentes a partir do quinto li
- `li:nth-child(-n+ 5){}` - seleciona em li todos os elementos precedentes inclusive o quinto li



# Descendência de camadas CSS
Nesse caso a formatação ser aplica está inerente a filiação dos elementos, seguindo tal genealogia para tal formatação.
```
ul li p{
    color: red;
}

div.destaque p{
    transform: uppercase;
}
```


## Referências
[lista completa](https://www.treinaweb.com.br/blog/truques-de-como-selecionar-o-n-esimo-item-com-css-usando-a-pseudo-classe-nth-child)
[pseudo classes e pseudo elementos](https://www.w3schools.com/css/css_pseudo_elements.asp)