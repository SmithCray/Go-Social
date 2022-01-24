const { User } = require("../models");

const userController = {
  getUsers(req, res) {
    User.find()
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getUser(req, res) {
    User.findOne({ _id: req.params.id })
      .populate("thoughts")
      .populate("friends")
      .then((dbOneUser) => {
        res.json(dbOneUser);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  addUser(req, res) {
    User.create(req.body)
      .then((dbNewUser) => {
        res.json(dbNewUser);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((dbUpdatedUser) => {
        res.json(dbUpdatedUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((dbDeleteUser) => {
        res.json(dbDeleteUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = userController;
