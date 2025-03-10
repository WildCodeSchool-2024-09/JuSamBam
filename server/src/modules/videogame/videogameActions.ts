import fs from "node:fs";
import type { RequestHandler } from "express";
import { validateMIMEType } from "validate-image-type";
import videogameRepository from "./videogameRepository";

// Lire tous les jeux (BROWSE)
const browse: RequestHandler = async (req, res, next) => {
  try {
    const games = await videogameRepository.readAll();
    res.json(games);
  } catch (err) {
    next(err);
  }
};

// Ajouter un jeu (ADD)
const add: RequestHandler = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
    } else {
      const validation = await validateMIMEType(req.file.path, {
        allowMimeTypes: ["image/jpeg", "image/png", "image/webp"],
      });

      if (!validation.ok) {
        fs.unlinkSync(req.file.path);
        res.status(400).json({ error: "Invalid image type" });
      } else {
        const newGameDatas = {
          title: req.body.title,
          img: req.file.filename,
          gender: req.body.gender,
          editor: req.body.editor,
          descrip: req.body.descrip,
        };

        const insertId = await videogameRepository.create(newGameDatas);
        res.status(201).json({ insertId });
      }
    }
  } catch (err) {
    next(err);
  }
};

const getFavorites: RequestHandler = async (req, res, next) => {
  const idUser = Number.parseInt(req.params.id);
  try {
    const favs = await videogameRepository.readFavs(idUser);
    res.json(favs);
  } catch (err) {
    next(err);
  }
};

const addFavorite: RequestHandler = async (req, res, next) => {
  const newFavorite = {
    gameId: Number.parseInt(req.params.id),
    userId: Number.parseInt(req.body.userId),
  };
  try {
    const insertId = await videogameRepository.createFavoriteGame(newFavorite);
    res.json({ id: insertId });
  } catch (err) {
    next(err);
  }
};

const deleteFavoriteGame: RequestHandler = async (req, res, next) => {
  const gameId = Number.parseInt(req.params.id);
  try {
    const result = await videogameRepository.destroyFavoriteGame(gameId);
    if (result) {
      res.json({ message: "Jeu retiré des favoris !" });
    } else {
      res.json({ message: "Une erreur est survenue" });
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, add, getFavorites, addFavorite, deleteFavoriteGame };
