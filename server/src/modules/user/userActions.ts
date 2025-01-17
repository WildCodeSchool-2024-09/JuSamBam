import type { RequestHandler } from "express";

// Import access to data
import userRepository from "./userRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all user
    const users = await userRepository.readAll();

    // Respond with the user in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// L'opération ADD - Ajouter un nouvel utilisateur
const add: RequestHandler = async (req, res, next) => {
  try {
    // Utilisation du repository pour créer un nouvel utilisateur
    const addUser = await userRepository.create(req.body);

    // Réponse avec le nouvel utilisateur ajouté au format JSON
    res.status(201).json(addUser);
  } catch (err) {
    // Transmettre les erreurs au middleware de gestion d'erreurs
    next(err);
  }
};

export default { browse, add };
