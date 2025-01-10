import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Videogame = {
  id: number;
  title: string;
  thumbnail: string;
};

class VideogameRepository {
  // The C of CRUD - Create operation

  async readAll() {
    // Execute the SQL SELECT query to retrieve all games from the "videogame" table
    const [rows] = await databaseClient.query<Rows>("select * from videogame");

    // Return the array of items
    return rows as Videogame[];
  }
}

export default new VideogameRepository();
