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
  // The C of CRUD - Create operation

  async readAll() {
    // Execute the SQL SELECT query to retrieve all games from the "videogame" table
    const [rows] = await databaseClient.query<Rows>("select * from videogame");

    // Return the array of items
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
