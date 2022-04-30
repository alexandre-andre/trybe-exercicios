# Desinstalando o Docker Engine
```
sudo apt-get purge docker-ce docker-ce-cli containerd.io
```

Para remover containers , volumes (que veremos nas próximas aulas) e configurações personalizadas que não são removidas automaticamente pelo apt-get , utilize os seguintes comandos:
```
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```
