import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

interface ListArcadeProps {
  id: number;
  title: string;
  img: string;
}

function LiveArcade() {
  const [games, setGames] = useState<ListArcadeProps[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/videogames`)
      .then((resultAPI) => {
        return resultAPI.json();
      })
      .then((gamejson) => {
        setGames(gamejson);
      });
  }, []);

  return (
    <div>
      <h1 id="top">Top 5 des jeux de nos arcadeur</h1>
      {games.length > 0 && (
        <ul id="list">
          {games.slice(0, 5).map((game: ListArcadeProps) => (
            <li key={game.id}>
              <img
                src={`${API_URL}/assets/images/${game.img}`}
                alt={game.title}
                width={140}
              />
            </li>
          ))}
        </ul>
      )}
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
