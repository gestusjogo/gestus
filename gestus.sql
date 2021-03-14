CREATE TABLE Usuario(Id serial PRIMARY KEY, Nome VARCHAR(255) NOT NULL, Idade integer NOT NULL, Data VARCHAR(255) NOT NULL, Multiplayer Boolean);
CREATE TABLE Fases_concluidas(Id serial PRIMARY KEY,idUsuario integer, Inicio Boolean, Fliperama BOOLEAN, Escola BOOLEAN, Supermercado BOOLEAN, Ambiental BOOLEAN, Sorveteria BOOLEAN, CONSTRAINT fk_idUsuario
      FOREIGN KEY(idUsuario) 
	  REFERENCES Usuario(Id));
CREATE TABLE Avaliacao(Id serial PRIMARY KEY, Fase VARCHAR(255) NOT NULL, Nota integer NOT NULL,idUsuario integer, CONSTRAINT fk_idUsuario
      FOREIGN KEY(idUsuario) 
	  REFERENCES Usuario(Id));