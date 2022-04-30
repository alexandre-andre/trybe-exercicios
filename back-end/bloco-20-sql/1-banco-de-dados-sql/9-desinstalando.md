# Desinstalando o MySQL Server
## Linux
Caso sua instalação tenha retornado algum problema, siga os passos a seguir para desinstalar e tente realizar a instalação novamente.

Preste muita atenção aos comandos.

Primeiro remova todos os pacotes instalados:
```
sudo apt-get remove mysql-server mysql-client mysql-common
```

Agora remova os arquivos de dependências que não são mais necessários e, em seguida, remova as versões antigas dos arquivos de pacotes.
```
sudo apt-get autoremove
```

```
sudo apt-get autoclean
```

Na sequência, remova os arquivos do mysql que podem ter ficado para trás.
```
sudo rm -rf /var/lib/mysql
```

```
sudo rm -rf /etc/mysql
```

Se a desinstalação for concluída com sucesso, o comando mysql --version não deve retornar a versão do seu mysql.