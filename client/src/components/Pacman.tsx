import { Component } from "react";
import PacmanReact from "react-pacman";

interface PacmanProps {
  moveUp: string;
  moveDown: string;
  moveLeft: string;
  moveRight: string;
}

class Pacman extends Component<PacmanProps> {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e: KeyboardEvent) => {
    const { moveUp, moveDown, moveLeft, moveRight } = this.props;

    const keyMap: { [key: string]: string } = {
      [moveUp]: "ArrowUp",
      [moveDown]: "ArrowDown",
      [moveLeft]: "ArrowLeft",
      [moveRight]: "ArrowRight",
    };

    const mappedKey = keyMap[e.key];
    if (mappedKey) {
      const keyboardEvent = new KeyboardEvent("keydown", {
        key: mappedKey,
      });
      window.dispatchEvent(keyboardEvent);
    }
  };

  render() {
    return (
      <div className="pacman">
        <PacmanReact />
      </div>
    );
  }
}

export default Pacman;
