# Configurando a inicialização e senha do servidor MYSQL
Por padrão, após a instalação, seu servidor vai estar configurado para iniciar junto ao sistema. Caso não queira que isso aconteça, para poupar memória RAM, você pode desativar o início automático utilizando o comando:
```
# Linux
sudo systemctl disable mysql

# macOS
brew services stop mysql
# Esse comando remove os serviços não utilizados
brew services cleanup
```


## Startar o servico
A primeira vez que for utilizar após iniciar o computador, será necessário iniciar o servidor com o comando:
```
# Linux
sudo systemctl start mysql

# macOS
brew services run mysql
```


## Deixar sempre ativo
Se desejar ativar novamente que ele inicie junto ao computador, basta usar o comando:
```
# Linux
sudo systemctl enable mysql

# macOS
brew services start mysql
```


## Definir uma senha para acesso ao banco de dados
Tanto para segurança quanto pra utilização no workbench (logo mais), será preciso entrar com a senha que você definir. Note que estamos falando aqui da senha do seu servidor mysql, e não da sua senha de super-usuário (root). Para isso, você rodará o seguinte comando:
```
mysql -u root -p
```

Como não há senha definida ainda, nenhuma senha deve ser digitada. Continue dando 'Enter'.

Caso ocorra algum erro, tente novamente adicionando o `sudo` igual o comando abaixo.
```
sudo mysql -u root -p
```

O mesmo ocorre acima, nenhuma senha deve ser digitada. Continue dando 'Enter'.

Aqui, você está navegando pelo MySQL monitor que é a interface padrão do mysql no terminal . E a partir daqui, você já tem o mysql instalado no seu computador e consegue executar os comandos do curso nessa interface.

Rode o comando, atentando para parte `'sua_senha_aqui'` , que deve ser alterada para senha que vc definir (podendo também ser vazia `''` , assumindo um ambiente de testes e desenvolvimento) :
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha_aqui'; flush privileges;
-- EX: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'; flush privileges;
```
