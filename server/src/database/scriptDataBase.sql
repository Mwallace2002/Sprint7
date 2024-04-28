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
