# Instalação
Para instalar o Docker Compose é bem simples, mas antes certifique-se que você já possui a Docker Engine ou o Docker Desktop instalado, conforme fizemos na primeira aula de Docker .

Se você estiver utilizando Windows ou Mac , o Docker Compose já é instalado junto com o Docker Desktop . Caso esteja utilizando alguma distro Linux , basta utilizar o seguinte comando para realizar a instalação:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Feito isso, basta aplicar a permissão de execução ao binário:
```
sudo chmod +x /usr/local/bin/docker-compose
```

E se tudo ocorrer bem, para validar a instalação basta executar o seguinte comando:
```
docker-compose --version
```

Devem ser exibidos os detalhes da versão instalada em seu terminal, para mais detalhes ou caso ocorra algum erro, consulte o guia oficial .
