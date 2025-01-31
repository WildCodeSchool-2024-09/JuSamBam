import type { RequestHandler } from "express";

// Import access to data
import videogameRepository from "./videogameRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const games = await videogameRepository.readAll();

    // Respond with the items in JSON format
    res.json(games);
  } catch (err) {
    // Pass any errors to the error-handling middleware
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

// // The R of BREAD - Read operation
// const read: RequestHandler = async (req, res, next) => {
//   try {
//     // Fetch a specific item based on the provided ID
//     const itemId = Number(req.params.id);
//     const item = await itemRepository.read(itemId);

//     // If the item is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the item in JSON format
//     if (item == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(item);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// const add: RequestHandler = async (req, res, next) => {
//   try {
//     const newItem = {
//       title: req.body.title,
//       user_id: req.body.user_id,
//     };

//     const insertId = await itemRepository.create(newItem);

//     res.status(201).json({ insertId });
//   } catch (err) {
//     next(err);
//   }
// };

export default { browse, add };
