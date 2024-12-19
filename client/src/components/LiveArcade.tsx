const ListArcade = [
  {
    id: 1,
    title: "Street fighter",
    img: "./src/assets/images/street-fighter-II.png",
  },
  {
    id: 2,
    title: "Space Invaders",
    img: "./src/assets/images/Space_Invaders_Logo.png",
  },
  {
    id: 3,
    title: "Dragon ball fighterZ",
    img: "./src/assets/images/Dragon_Ball_FighterZ_Logo.png",
  },
  {
    id: 4,
    title: "Pac-man",
    img: "./src/assets/images/pac-man.gif",
  },
  {
    id: 5,
    title: "Donkey Kong",
    img: "./src/assets/images/Donkey_Kong_(série)_Logo.png",
  },
];

interface ListArcadeProps {
  id: number;
  title: string;
  img: string;
}

function LiveArcade() {
  return (
    <div>
      <h1 id="top">Top 5 des jeux de nos arcadeur</h1>
      <ul id="list">
        {ListArcade.map((game: ListArcadeProps) => (
          <li key={game.id}>
            <img src={game.img} alt={game.title} width={140} />
          </li>
        ))}
      </ul>
      <div id="borne">
        <img
          src="./src/assets/images/borne-arcade1.png"
          alt="borne"
          width={600}
        />
      </div>
    </div>
  );
}

export default LiveArcade;
