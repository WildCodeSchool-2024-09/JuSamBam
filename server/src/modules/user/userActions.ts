import argon2 from "argon2";
import type { RequestHandler } from "express";

// Import access to data
import userRepository from "./userRepository";

// type UserDatas = {
//   email: string | null,
//   password: string | null,
// }

// L'opération B de BREAD - Parcourir (Lire tous les utilisateurs)
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Récupérer tous les utilisateurs
    const users = await userRepository.readAll();

    // Répondre avec les utilisateurs au format JSON
    res.json(users);
  } catch (err) {
    // Transmettre toute erreur au middleware de gestion des erreurs
    next(err);
  }
};

// L'opération R de BREAD - Lire un utilisateur
const read: RequestHandler = async (req, res, next) => {
  try {
    // Récupérer un utilisateur spécifique basé sur l'ID fourni
    const userId = Number(req.params.id);
    const user = await userRepository.read(userId);

    // Si l'utilisateur n'est pas trouvé, répondre avec le statut HTTP 404 (Non trouvé)
    // Sinon, répondre avec l'utilisateur au format JSON
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Transmettre toute erreur au middleware de gestion des erreurs
    next(err);
  }
};

// L'opération A de BREAD - Ajouter (Créer) un utilisateur
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extraire les données de l'utilisateur du corps de la requête
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      hashed_password: req.body.hashed_password,
    };

    // Créer l'utilisateur
    const createdUser = await userRepository.create(newUser);

    // Répondre avec le statut HTTP 201 (Créé) et l'utilisateur créé
    res.status(201).json(createdUser);
  } catch (err) {
    next(err);
  }
};

const update: RequestHandler = async (req, res, next) => {
  const updatedUserDatas = {
    id: Number.parseInt(req.params.id),
    email: req.body.email,
    hashed_password: req.body.hashed_password,
  };

  try {
    const affectedRows = await userRepository.edit(updatedUserDatas);

    if (affectedRows) {
      res.sendStatus(201);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const checkPassword: RequestHandler = (req, res, next) => {
  const { password, confirmPassword } = req.body;

  if (password === confirmPassword) {
    next();
  } else {
    res.sendStatus(403);
  }
};

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword: RequestHandler = async (req, res, next) => {
  const { password } = req.body;
  try {
    const hashedPassword = await argon2.hash(password, hashingOptions);

    req.body.hashed_password = hashedPassword;

    req.body.password = undefined;

    next();
  } catch (err) {
    next(err);
  }
};

const addImageProfile: RequestHandler = async (req, res, next) => {
  const file = req.file as Express.Multer.File;
  const newImageProfile = {
    id: Number.parseInt(req.params.id),
    img_profile: file.filename,
  };
  try {
    const affectedRows =
      await userRepository.createImageProfile(newImageProfile);
    if (affectedRows !== 0) {
      res.status(201);
    } else {
      res.status(404);
    }
  } catch (err) {
    next(err);
  }
};

export default {
  browse,
  read,
  add,
  update,
  checkPassword,
  hashPassword,
  addImageProfile,
};
