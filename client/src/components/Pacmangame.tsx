import { useEffect, useState } from "react";
import { render } from "react-dom";
import Pacman from "./Pacman";

function PacmanGame() {
  const [gameKey, setGameKey] = useState(0); // Clé unique pour relancer le jeu

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "r") {
        setGameKey((prevKey) => prevKey + 1); // Change la clé pour forcer le reload avec la touche "r"
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="pacman-game">
      <Pacman
        key={gameKey}
        moveUp="z"
        moveDown="s"
        moveLeft="q"
        moveRight="d"
      />
    </div>
  );
}

render(<PacmanGame />, document.getElementById("root"));

export default PacmanGame;
