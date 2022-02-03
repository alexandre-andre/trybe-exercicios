# Criando um formulário em React .

- Crie um novo projeto, utilizando npx create-react-app my-form-2.0
- Caso julgue necessário, crie estilos CSS para seu formulário, de acordo com a sua imaginação.
- Faça tudo utilizando as abstrações do React .

Vamos criar um formulário de cadastro de currículo com base na especificação seguintes:
1. Crie um **fieldset** para os dados pessoais a seguir:
- Nome - Texto 
- - Limite de 40 caracteres
- - Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
- - Campo obrigatório
- Email - Texto
- - Limite de 50 caracteres
- - Campo obrigatório
- CPF - Texto
- - Limite de 11 caracteres
- - Campo obrigatório
- Endereço - Texto
- - Limite de 200 caracteres
- - Remover qualquer caracter especial que seja digitado
- - Campo obrigatório
- Cidade - Texto
- - Limite de 28 caracteres
- - Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
- - Campo obrigatório.
- Estado - ComboBox
- - Todos os estados do Brasil
- - Campo obrigatório.
- Tipo - Radio Button
- - Casa, Apartamento
- - Campo obrigatório.

2. Crie outro **fieldset** para dados do seu último emprego:
- Resumo do currículo - TextArea
- - Limite de 1000 caracteres
- - Campo obrigatório.
- Cargo - TextArea
- - Limite de 40 caracteres
- - Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
- - Campo obrigatório
- Descrição do cargo - Texto
- - Limite de 500 caracteres
- - Campo obrigatório

3. Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.

4. Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.

# Bônus
- Utilize [regex](https://www.regextester.com/100026) para validar o campo email.
- - O formato esperado é: `trybe@gmail.com` .
- - Dica: Para estudar como o [`regex`](https://regexone.com/) funciona.