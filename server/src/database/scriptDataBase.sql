create database PP420;
use PP420;

create table login(
	username varchar(50) not null,
    password varchar(50) not null,
    primary key(username, password)
);

INSERT INTO login (username, password) VALUES
    ('maxwallace', '1234'),
    ('enriquefaijo', '1234'),
    ('nicolascalderon', '1234'),
    ('user1', '1234'),
    ('user2', '1234'),
    ('user3', '1234'),
    ('user4', '1234');
    
create table contactos(
	departamento varchar(50) not null,
    mail varchar(50) not null,
    numero varchar(50) not null,
    primary key(departamento, mail)
);

INSERT INTO contactos (departamento, mail, numero) VALUES
    ('Ventas', 'ventas@gmail.com', '123'),
    ('Marketing', 'marketing@gmail.com', '456'),
    ('Desarrollo', 'desarrollo@gmail.com', '789'),
    ('Recursos humanos', 'recursoshumanos@gmail.com', '098');


create table vehiculos(
	visita varchar(50) not null,
    patente varchar(50) not null,
    primary key(visita, patente)
);

INSERT INTO vehiculos (visita, patente) VALUES
    ('Max', '123'),
    ('Enrique', '456'),
    ('Nico', '789');
 
