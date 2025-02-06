import { render } from "react-dom";
import Pacman from "./Pacman";
import "./Pacman.css";

function PacmanGame() {
  return (
    // assigniation des touches Z,Q,S,D pour ce déplacer
    <div className="pacman-game">
      <Pacman moveUp="z" moveDown="s" moveLeft="q" moveRight="d" />
    </div>
  );
}

render(<PacmanGame />, document.getElementById("root"));

export default PacmanGame;
