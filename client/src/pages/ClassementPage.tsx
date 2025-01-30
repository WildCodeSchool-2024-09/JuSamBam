import type { FC } from "react";

interface Player {
  id: number;
  name: string;
  score: number;
}

const classPlayers: Player[] = [
  { id: 1, name: "Joueur1", score: 1500 },
  { id: 2, name: "Joueur2", score: 1400 },
  { id: 3, name: "Joueur3", score: 1300 },
  { id: 4, name: "Joueur4", score: 1200 },
  { id: 5, name: "Joueur5", score: 1100 },
];

const ClassementPage: FC = () => {
  return (
    <div>
      <h1>Classement des meilleurs joueurs</h1>
      <ul>
        {classPlayers.map((player, index) => (
          <li key={player.id}>
            <strong>#{index + 1}</strong> - {player.name} : {player.score}{" "}
            points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassementPage;
