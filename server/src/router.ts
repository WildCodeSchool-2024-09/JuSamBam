import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";
import userActions from "./modules/user/userActions";
import videogameActions from "./modules/videogame/videogameActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
router.get("/api/videogames", videogameActions.browse);
router.get("/api/users", userActions.browse);

/* ************************************************************************* */

export default router;
