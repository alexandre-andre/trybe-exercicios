**Exercício 1**: 🚀 Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
- Nome;
- Espécie;
- Sexo;
- Idade;
- Localização.

Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

Identificação das **Entidades**:
- Entidade 1: Animal;
- Entidade 2: Cuidador;
- Entidade 3: Gerente;
- Entidade 4: Cuidador e Animal;

Identificação dos **Atributos**:
- Animal: animal_id, nome, especie, sexo, idade e localização;
- Cuidador: cuidador_id, nome, gerente_id;
- Gerente: gerente_id e nome;
- Cuidador e Animal: cuidador_id e animal_id;

Identificar os **Relacionamentos**:
- Um animal pode ter um ou mais cuidadores;
- Um cuidador pode cuidar de um ou mais animais;
- Um gerente pode gerenciar uma ou mais cuidadores;
- Um cuidador possui um gerente;

(N) animal - pode ter - (N) cuidador

(1) gerente - pode ter - (N) cuidador

```sql
DROP SCHEMA IF NOT EXISTS zoologico;
CREATE SCHEMA zoologico;
USE zoologico;

CREATE TABLE animal(
  id INT PRIMARY_KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  especie VARCHAR(50) NOT NULL,
  sexo VARCHAR(50) NOT NULL,
  idade INT NOT NULL,
  localizacao VARCHAR(100) NOT NULL 
);

CREATE TABLE cuidador(
  id INT PRIMARY KEY AUTO_INCREMENT
  nome VARCHAR(50) NOT NULL,
  gerente_id INT NOT NULL,
  FOREIGN KEY (gerente_id) REFERENCES gerente(id)
);

CREATE TABLE gerente(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
);

CREATE TABLE cuidador_e_animal(
  cuidador_id INT NOT NULL,
  animal_id INT NOT NULL,
  CONSTRAINT PRIMARY KEY(cuidador_id, animal_id),
  FOREIGN KEY (cuidador_id) REFERENCES cuidador(id),
  FOREIGN KEY (animal_id) REFERENCES animal(id)
);
```
