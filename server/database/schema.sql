create table videogame (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  img varchar(255) not null
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

insert into videogame (title, img)
values
("Pac-man", "pac-man.gif"),
("Space Invenders", "Space_Invaders_Logo.png"),
("Donkey kong", "Donkey_Kong_Logo.png"),
("street fighter", "street-fighter-II.png"),
("Dragon ball fighterZ", "Dragon_Ball_FighterZ_Logo.png");

