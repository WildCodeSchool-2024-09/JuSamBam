import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Item = {
  id: number;
  title: string;
  user_id: number;
};

class ItemRepository {
  // Le C de CRUD - Opération de création

  async create(item: Omit<Item, "id">) {
    // Exécuter la requête SQL INSERT pour ajouter un nouvel élément à la table "item"
    const [result] = await databaseClient.query<Result>(
      "insert into item (title, user_id) values (?, ?)",
      [item.title, item.user_id],
    );

    // Retourner l'ID du nouvel élément inséré
    return result.insertId;
  }

  // Les R de CRUD - Opérations de lecture

  async read(id: number) {
    // Exécuter la requête SQL SELECT pour récupérer un élément spécifique par son ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from item where id = ?",
      [id],
    );

    // Retourner la première ligne du résultat, qui représente l'élément
    return rows[0] as Item;
  }

  async readAll() {
    // Exécuter la requête SQL SELECT pour récupérer tous les éléments de la table "item"
    const [rows] = await databaseClient.query<Rows>("select * from item");

    // Retourner le tableau des éléments
    return rows as Item[];
  }

  // Le U de CRUD - Opération de mise à jour
  // TODO: Implémenter l'opération de mise à jour pour modifier un élément existant

  // async update(item: Item) {
  //   ...
  // }

  // Le D de CRUD - Opération de suppression
  // TODO: Implémenter l'opération de suppression pour retirer un élément par son ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new ItemRepository();
