CREATE DATABASE Gestus;
use Gestus;
CREATE TABLE Usuario(Id int AUTO_INCREMENT PRIMARY KEY, Nome VARCHAR(255) NOT NULL, Idade int NOT NULL, Data VARCHAR(255) NOT NULL, Multiplayer Boolean);
CREATE TABLE Fases_concluidas(Id int AUTO_INCREMENT PRIMARY KEY,idUsuario int, Inicio Boolean, Fliperama BOOLEAN, Escola BOOLEAN, Supermercado BOOLEAN, Ambiental BOOLEAN, Sorveteria BOOLEAN, FOREIGN KEY (idUsuario) REFERENCES Usuario(Id));
CREATE TABLE Avaliacao(Id Int AUTO_INCREMENT PRIMARY KEY, Fase VARCHAR(255) NOT NULL, Nota int NOT NULL,idUsuario int, FOREIGN KEY (idUsuario) REFERENCES Usuario(Id));