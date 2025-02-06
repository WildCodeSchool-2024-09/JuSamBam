import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Videogame = {
  id: number;
  title: string;
  img: string;
  gender: string;
  editor: string;
  descrip: string;
};

class VideogameRepository {
  // Le C de CRUD - Opération de création

  async readAll() {
    // Exécuter la requête SQL SELECT pour récupérer tous les jeux de la table "videogame"
    const [rows] = await databaseClient.query<Rows>("select * from videogame");

    // Retourner le tableau des éléments
    return rows as Videogame[];
  }

  async create(addGame: Omit<Videogame, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into videogame (title, img, gender, editor, descrip ) values (?, ?, ?, ?, ?)",
      [
        addGame.title,
        addGame.img,
        addGame.gender,
        addGame.editor,
        addGame.descrip,
      ],
    );

    return result.insertId;
  }
}

export default new VideogameRepository();
