
const express = require("express");
const router = express.Router();

const {
  userRegistration,
  getAllUsers,
  editUser,
  deleteUser,
  getUser,
} = require("./controller");
router.post("/", userRegistration);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;