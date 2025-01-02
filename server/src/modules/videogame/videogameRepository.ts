import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Videogame = {
  id: number;
  name: string;
  thumbnail: string;
};

class VideogameRepository {
    async readAll(){
        const [rows] = await databaseClient.query<Rows>("select * from videogame")
        return [rows as Videogame[]]
    }
}

export default new VideogameRepository