import type { RequestHandler } from "express";

// Import access to data
import videogameRepository from "./videogameRepository";

// L'opération B de BREAD - Parcourir (Lire tous les éléments)
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Récupérer tous les éléments
    const games = await videogameRepository.readAll();

    // Répondre avec les éléments au format JSON
    res.json(games);
  } catch (err) {
    // Transmettre toute erreur au middleware de gestion des erreurs
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  const file = req.file as Express.Multer.File;

  const newGameDatas = {
    title: req.body.title,
    img: file.filename,
    gender: req.body.gender,
    editor: req.body.editor,
    descrip: req.body.descrip,
  };

  try {
    const insertId = await videogameRepository.create(newGameDatas);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, add };
