// import { useEffect, useState } from "react";
import { render } from "react-dom";
import Pacman from "./Pacman";
import "./Pacman.css";

function PacmanGame() {
  // const [timeSpent, setTimeSpent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeSpent((prevTime) => prevTime + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="pacman-game">
      <Pacman moveUp="z" moveDown="s" moveLeft="q" moveRight="d" />
    </div>
  );
}

render(<PacmanGame />, document.getElementById("root"));

export default PacmanGame;
