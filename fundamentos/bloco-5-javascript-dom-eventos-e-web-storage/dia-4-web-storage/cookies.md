# Cookies 
São dados salvos em pequens arquivos de texto da pessoa que utiliza a internet.

Cookies foram inventados para salvar dados das pessoas usuárias no próprio browser , pois, dessa forma, uma página conseguirá acessá-los para executar uma lógica com os parâmetros personalizados por pessoa.

Quando o servidor envia a página Web para o browser , a conexão é desligada e o servidor não tem mais acesso às informações da requisição - como os itens que a pessoa usuária adicionou a um carrinho de compras ou o e-mail que lhe dará acesso a sua conta.

Cookies são salvos no formato chave-valor . Quando o navegador faz a requisição ao servidor para acessar uma página Web, os cookies dessa página são adicionados à requisição. 

Para criar um cookie, é preciso atribuir à propriedade `document.cookie` uma string contendo o nome e o valor do que se pretende armazenar:
```javascript
document.cookie = 'email=isabella@email.com'
```

Por padrão o cookie é deletado quando o navegador é fechado. Para que isso não aconteça adicionamos uma data de expiração:
```javascript
document.cookie = 'email=isabella@email.com; expires=Thu, 31 Dec 2021 23:59 UTC'
```

Também é possível **adicionar** o parâmetro `path`, que dirá ao navegador qual caminho o cookie criado pertence. Por padrão, o cookie pertence a página atual:
```javascript
document.cookie = 'email=isabella@email.com; expires=Thu, 31 Dez 2021 23:59 UTC; path=/'
```

Também é possível atribuir `document.cookie` a uma variável
```javascript
document.cookie = 'email=isabella@email.com; expires=Thu, 31 Dec 2021 23:59 UTC; path'
const myCookie = document.cookie
console.log(myCookie) // email=isabella@email.com
```

É possível **alterar o valor** do cookie da mesma forma que ele foi criado, basta atribuir a nova informação:
```javascript
document.cookie = 'email=zecabrito@email.com; expires=Thu, 31 Dec 2021 23:59 UTC'
```

**Para deletar** o cookie não é preciso especificar o valor a ser deletado, é pessível fazê-lo passando uma data que já expirou:
```javascript
document.cookie = 'email=; expires=Thu, 01 Dec 2021 00:00 UTC;'
```

