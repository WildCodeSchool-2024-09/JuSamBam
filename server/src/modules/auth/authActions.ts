import type { RequestHandler } from "express";

import argon2 from "argon2";
import jwt from "jsonwebtoken";
import userRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await userRepository.ReadByEmail(email);

    if (user) {
      const verified = await argon2.verify(user.hashed_password, password);

      if (verified) {
        const myPlayload = {
          sub: email,
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
          maxAge: 24 * 60 * 60 * 1000,
        });

        res.sendStatus(200);
      } else {
        res.sendStatus(403);
      }
    }
  } catch (err) {
    next(err);
  }
};

export default { login };
