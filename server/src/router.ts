import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import authActions from "./modules/auth/authActions";
import itemActions from "./modules/item/itemActions";
import userActions from "./modules/user/userActions";
import videogameActions from "./modules/videogame/videogameActions";
import multer from "multer"

const upload = multer({dest: "public/assets/images/"})

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
router.get("/api/auth/check", authActions.checkAuthCookie);
router.get("/api/auth/logout", authActions.logout);
router.get("/api/videogames", videogameActions.browse);
router.post("/api/videogames", upload.single("img"), videogameActions.add)
router.get("/api/users", userActions.browse);
router.post(
  "/api/users",
  userActions.checkPassword,
  userActions.hashPassword,
  userActions.add,
);
router.post("/api/login", authActions.login);
router.put(
  "/api/users",
  userActions.checkPassword,
  userActions.hashPassword,
  userActions.update,
);
/* ************************************************************************* */

export default router;
