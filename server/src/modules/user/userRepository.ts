import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  hashed_password: string;
};

type UpdateUser = {
  id: number;
  email: string;
  hashed_password: string;
};

class userRepository {
  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as User;
  }

  // The C of CRUD - Create operation

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await databaseClient.query<Rows>("select * from user");

    // Return the array of items
    return rows as User[];
  }

  async create(addUser: Omit<User, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into user (firstname, lastname, email, hashed_password) values (?, ?, ?, ?)",
      [
        addUser.firstname,
        addUser.lastname,
        addUser.email,
        addUser.hashed_password,
      ],
    );
    // Return the newly created user with the generated ID
    return { id: result.insertId, ...addUser };
  }

  async ReadByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );
    return rows[0] as User;
  }

  async edit(updateUser: UpdateUser) {
    const [result] = await databaseClient.query<Result>(
      "update user set email = ?, hashed_passwordpassword = ? where id = ?",
      [updateUser.email, updateUser.hashed_password, updateUser.id],
    );

    return result.affectedRows;
  }
}

export default new userRepository();
