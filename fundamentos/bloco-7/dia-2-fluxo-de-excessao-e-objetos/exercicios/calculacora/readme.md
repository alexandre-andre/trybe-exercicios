1.  Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.
Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
Utilize o throw new Error e o bloco try/catch .
Imprima o erro no parágrafo com id result , para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
Evite funções que tenham muitas responsabilidades distintas.
2.  Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.
Você pode fazer essa verificação utilizando a função isNan() .
3.  Você se lembrou de limpar os inputs após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua função utilizando o finally ?