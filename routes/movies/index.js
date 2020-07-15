
const express = require("express");
const router = express.Router();

const routes = require("./controller");
router.post("/", routes.postMovie);
router.get("/", routes.getAllMovie);
router.get("/:genre", routes.getGenre);
router.put("/:id", routes.updateMovie);
router.delete("/:id", routes.deleteMovie);

module.exports = router;