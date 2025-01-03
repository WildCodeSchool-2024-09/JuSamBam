create table videogame (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  thumbnail varchar(255) not null
);

insert into videogame (id, title, thumbnail)
values
(1, "street fighter", "http://localhost:3000/src/assets/images/street-fighter-II.png"),
(2, "Space Invenders", "http://localhost:3000/src/assets/images/Space_Invaders_Logo.png"),
(3, "Dragon ball fighterZ", "http://localhost:3000/src/assets/images/Dragon_Ball_FighterZ_Logo.png"),
(4, "Pac-man", "http://localhost:3000/src/assets/images/pac-man.gif"),
(5, "Donkey kong", "http://localhost:3000/src/assets/images/Donkey_Kong_Logo.png");
