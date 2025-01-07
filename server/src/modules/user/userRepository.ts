import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  firstname: string;
  lastname: string;
};

class UserRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from user");
    return [rows as User[]];
  }
}

export default new UserRepository();
