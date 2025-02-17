import type { RequestHandler } from "express";

import argon2 from "argon2";

import jwt from "jsonwebtoken";
import userRepository from "../user/userRepository";

//gestion de la connection des utilisteurs
const login: RequestHandler = async (req, res, next) => {
  const logUser = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    // Récupère l'utilisateur par son email
    const user = await userRepository.ReadByEmail(logUser.email);

    if (user) {
      // Vérifie si le mot de passe est correct
      const verified = await argon2.verify(
        user.hashed_password,
        logUser.password,
      );

      if (verified) {
        // Crée un payload avec l'ID de l'utilisateur
        const myPlayload = {
          id: user.id,
        };
        // Génère un token JWT
        const token = await jwt.sign(
          myPlayload,
          process.env.APP_SECRET as string,
          { expiresIn: "1h" },
        );
        // Définit un cookie avec le token
        res.cookie("authToken", token, {
          // httpOnly: true,
          // secure: true,
          sameSite: "strict",
          maxAge: 60 * 60 * 1000,
        });
        // Renvoie l'ID de l'utilisateur en réponse
        res.status(200).json({ id: user.id });
      } else {
        //Si la vérification échoue renvoie un statut 403
        res.sendStatus(403);
      }
    } else {
      // Si l'utilisateur n'est pas trouvé renvoie un statut 403
      res.sendStatus(403);
    }
  } catch (err) {
    next(err);
  }
};
// vérifier le cookie d'authentification
const checkAuthCookie: RequestHandler = (req, res, next) => {
  const { authToken } = req.cookies;

  try {
    if (authToken) {
      // Vérifie le token JWT
      const verified = jwt.verify(authToken, process.env.APP_SECRET as string);

      if (verified) {
        // Si le token est vérifié renvoie un statut 200
        res.status(200);
      } else {
        // Sinon efface le cookie
        res.clearCookie("authToken");
      }
      next();
    } else {
      // Si le token n'existe pas renvoie un statut 401
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

const logout: RequestHandler = (req, res, next) => {
  const { authToken } = req.cookies;

  if (authToken) {
    res.clearCookie(authToken).sendStatus(200);
  }
};

const decodeToken: RequestHandler = async (req, res, next) => {
  const { authToken } = req.cookies;

  try {
    // Décode le token JWT et renvoie le contenu
    const decoded = jwt.decode(authToken);
    res.json(decoded);
  } catch (err) {
    next(err);
  }
};

export default { login, checkAuthCookie, logout, decodeToken };
