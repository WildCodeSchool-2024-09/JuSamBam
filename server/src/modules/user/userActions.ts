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

export default { browse };
