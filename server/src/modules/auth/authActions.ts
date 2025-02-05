import type { RequestHandler } from "express";

import argon2 from "argon2";

import jwt from "jsonwebtoken";
import userRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  const logUser = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const user = await userRepository.ReadByEmail(logUser.email);

    if (user) {
      const verified = await argon2.verify(
        user.hashed_password,
        logUser.password,
      );

      if (verified) {
        const myPlayload = {
          id: user.id,
        };
        const token = await jwt.sign(
          myPlayload,
          process.env.APP_SECRET as string,
          { expiresIn: "1h" },
        );

        res.cookie("authToken", token, {
          // httpOnly: true,
          // secure: true,
          sameSite: "strict",
          maxAge: 60 * 60 * 1000,
        });

        res.status(200);
        next();
      } else {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    next(err);
  }
};

const checkAuthCookie: RequestHandler = (req, res, next) => {
  const { authToken } = req.cookies;

  try {
    if (authToken) {
      const verified = jwt.verify(authToken, process.env.APP_SECRET as string);
      if (verified) {
        res.status(200);
      } else {
        res.clearCookie("authToken");
      }
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

const logout: RequestHandler = (req, res, next) => {
  const { authToken } = req.cookies;

  if (authToken) {
    res.clearCookie("authToken").sendStatus(200);
  }
};

const decodeToken: RequestHandler = async (req, res, next) => {
  const { authToken } = req.cookies;

  try {
    const decoded = jwt.decode(authToken);
    res.json(decoded);
  } catch (err) {
    next(err);
  }
};

export default { login, checkAuthCookie, logout, decodeToken };
