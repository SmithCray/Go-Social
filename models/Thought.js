const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction.js");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      // add email verify here
    },
    thoughts: [
      {
        type: Schema.Type.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Type.ObjectId,
        ref: "User",
      },
    ],
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
