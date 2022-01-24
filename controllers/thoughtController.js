const { Thought } = require("../models");

const thoughtController = {
  getThoughts(req, res) {
    Thought.find().then((dbThought) => {
      res.json(dbThought);
    });
  },
  getThought(req, res) {
    Thought.findOne({ _id: req.params.id })
      .then((dbOneThought) => {
        res.json(dbOneThought);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  addThought(req, res) {
    Thought.create(req.body)
      .then((dbNewThought) => {
        res.json(dbNewThought);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((dbUpdatedThought) => {
        res.json(dbUpdatedThought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteThought(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((dbDeleteThought) => {
        res.json(dbDeleteThought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;
