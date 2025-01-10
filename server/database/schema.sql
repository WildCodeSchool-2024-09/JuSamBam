create table videogame (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  thumbnail varchar(255) not null
);

create table user (
  id int unsigned primary key auto_increment not null,
  firstname varchar(255) not null,
  lastname varchar(255) not null
);

insert into user
(firstname, lastname)
values
("Obi-Wan", "Kenobi"),
("Tony", "Stark");

insert into videogame (title, thumbnail)
values
("street fighter", "http://localhost:3000/src/assets/images/street-fighter-II.png"),
("Space Invenders", "http://localhost:3000/src/assets/images/Space_Invaders_Logo.png"),
("Dragon ball fighterZ", "http://localhost:3000/src/assets/images/Dragon_Ball_FighterZ_Logo.png"),
("Pac-man", "http://localhost:3000/src/assets/images/pac-man.gif"),
("Donkey kong", "http://localhost:3000/src/assets/images/Donkey_Kong_Logo.png");
