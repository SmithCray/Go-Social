// ref user routes
const router = require("express").Router();
const {
  getThoughts,
  getThought,
  addThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(addThought);
router.route("/:id").get(getThought).put(updateThought).delete(deleteThought);

module.exports = router;
