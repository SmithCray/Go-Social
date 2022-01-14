const router = require("express").Router();
const { getUsers, getUser } = require("../../controllers/userController");

router.route("/").get(getUsers);

module.exports = router;
