import { useEffect, useState } from "react";

interface ListArcadeProps {
  id: number;
  title: string;
  img: string;
}

function LiveArcade() {
  const [games, setGames] = useState<ListArcadeProps[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const data = await fetch("/api/games").then((res) => res.json());
      setGames(data);
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h1 id="top">Top 5 des jeux de nos arcadeur</h1>
      <ul id="list">
        {games.map((game: ListArcadeProps) => (
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
