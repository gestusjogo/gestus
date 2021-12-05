Drop table Avaliacao;
Drop table Fases_concluidas;
Drop table Usuario;
CREATE TABLE Usuario(Id serial PRIMARY KEY, Nome VARCHAR(255) NOT NULL, Idade integer NOT NULL, Data VARCHAR(255) NOT NULL, Multiplayer Boolean DEFAULT FALSE);
CREATE TABLE Fases_concluidas(Id serial PRIMARY KEY,idUsuario integer, Inicio Boolean DEFAULT FALSE, Fliperama BOOLEAN DEFAULT FALSE, Escola BOOLEAN DEFAULT FALSE, Supermercado BOOLEAN DEFAULT FALSE, Ambiental BOOLEAN DEFAULT FALSE, Sorveteria BOOLEAN DEFAULT FALSE, Praça BOOLEAN DEFAULT FALSE, CONSTRAINT fk_idUsuario
      FOREIGN KEY(idUsuario) 
	  REFERENCES Usuario(Id));
CREATE TABLE Avaliacao(Id serial PRIMARY KEY, Fase VARCHAR(255) NOT NULL, Nota integer NOT NULL,idUsuario integer, CONSTRAINT fk_idUsuario
      FOREIGN KEY(idUsuario) 
	  REFERENCES Usuario(Id));