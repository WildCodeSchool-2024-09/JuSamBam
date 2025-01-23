import type { RequestHandler } from "express";

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
      if (user.password === logUser.password) {
        const myPlayload = {
          sub: logUser.email,
        };

        const token = await jwt.sign(
          myPlayload,
          process.env.APP_SECRET as string,
          { expiresIn: "1h" },
        );

        // res.json({
        //   token,
        //   user: user.email,
        // });

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
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    next(err);
  }
};

export default { login };
