const router = require("express").Router();
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(addUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
