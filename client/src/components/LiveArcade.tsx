import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
  genre: string;
}

function LiveArcade() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const data = await fetch("/api/games").then((res) => res.json());
      setGames(data);
    };

    fetchGames();
  }, []);

  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>
          <h3>{game.name}</h3>
          <p>{game.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default LiveArcade;
