import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

class userRepository {
  // The C of CRUD - Create operation

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await databaseClient.query<Rows>("select * from user");

    // Return the array of items
    return rows as User[];
  }

  async create(addUser: Omit<User, "id">) {
    // Execute the SQL INSERT query to add a new program to the "program" table
    const [result] = await databaseClient.query<Result>(
      "insert into user (firstname, lastname, email, password) values (?, ?, ?, ?)",
      [addUser.firstname, addUser.lastname, addUser.email, addUser.password],
    );
    // Return the ID of the newly inserted item
    return { id: result.insertId, ...addUser };
  }

  async ReadByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );
    return rows[0] as User;
  }
}

export default new userRepository();
