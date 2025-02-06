import type { RequestHandler } from "express";

// Importer l'accès aux données
import itemRepository from "./itemRepository";

// L'opération B de BREAD - Parcourir (Lire tous les éléments)
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Récupérer tous les éléments
    const items = await itemRepository.readAll();

    // Répondre avec les éléments au format JSON
    res.json(items);
  } catch (err) {
    // Transmettre toute erreur au middleware de gestion des erreurs
    next(err);
  }
};

// L'opération R de BREAD Lire un élément
const read: RequestHandler = async (req, res, next) => {
  try {
    // Récupérer un élément spécifique basé sur l'ID fourni
    const itemId = Number(req.params.id);
    const item = await itemRepository.read(itemId);

    // Si l'élément n'est pas trouvé, répondre avec le statut HTTP 404 (Non trouvé)
    // Sinon, répondre avec l'élément au format JSON
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    // Transmettre toute erreur au middleware de gestion des erreurs
    next(err);
  }
};

// L'opération A de BREAD - Ajouter (Créer) un élément
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extraire les données de l'élément du corps de la requête
    const newItem = {
      title: req.body.title,
      user_id: req.body.user_id,
    };

    // Créer l'élément
    const insertId = await itemRepository.create(newItem);

    // Répondre avec le statut HTTP 201 (Créé) et l'ID du nouvel élément inséré
    res.status(201).json({ insertId });
  } catch (err) {
    // Transmettre toute erreur au middleware de gestion des erreurs
    next(err);
  }
};

export default { browse, read, add };
