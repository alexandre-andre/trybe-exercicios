# Qual seletor usar?
`getElementById(id)` funciona de maneira diferente do `querySelector('#id')` , mas o resultado é o mesmo. Como dito no vídeo, o primeiro tem uma performance melhor, mas o segundo é mais flexível.

> Atenção! Enquanto os `getElementsByClassName('ClassName')` e `getElementsByTagName('TagName')` retornam uma __HTMLCollection__, os `querySelectorAll('.ClassName')` e `querySelectorAll('TagName')` retornam uma __NodeList__.


[HTMLColletion x NodeList](https://teamtreehouse.com/community/understanding-the-difference-between-an-htmlcollection-and-a-nodelist)