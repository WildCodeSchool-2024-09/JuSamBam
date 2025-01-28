import type { RequestHandler } from "express";

// Import access to data
import userRepository from "./userRepository";

// type UserDatas = {
//   email: string | null,
//   password: string | null,
// }

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

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific user based on the provided ID
    const userId = Number(req.params.id);
    const user = await userRepository.read(userId);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the user data from the request body
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    };

    // Create the user
    const createdUser = await userRepository.create(newUser);

    // Respond with HTTP 201 (Created) and the created user
    res.status(201).json(createdUser);
  } catch (err) {
    next(err);
  }
};

const update: RequestHandler = async (req, res, next) => {
  const updatedUserDatas = {
    id: Number.parseInt(req.params.id),
    email: req.body.email,
    password: req.body.password,
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
export default { browse, read, add, update, checkPassword };
