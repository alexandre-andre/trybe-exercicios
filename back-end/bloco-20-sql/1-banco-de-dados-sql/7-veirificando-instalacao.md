# Verificando o status da instalação
Uma instância de um banco de dados é similar à instalação de um software (mais especificamente um serviço) que roda em segundo plano no seu computador. Existem serviços que rodam tanto localmente em sua máquina quanto em servidores remotos ao redor do mundo.

Com isso em mente, vamos ver agora como você pode verificar manualmente se o serviço do MySQL está rodando corretamente. Isso pode ser útil, caso tenha problemas ao se conectar à instância que acabou de instalar:

1. Abra o terminal e digite o seguinte comando (deve ser exibido o status de active no Linux / started no macOS)
```
# Linux
sudo systemctl status mysql
# macOS
brew services list
```

2. Caso o serviço esteja parado, você pode usar o comando a seguir para iniciá-lo:
```
# Linux
systemctl start mysql
# macOS
brew services run mysql
```

3. Para parar o serviço do MySQL , você pode usar o comando stop
```
# Linux
systemctl stop mysql
# macOS
brew services stop mysql
```

4. Para sair, aperte ctrl+c.
