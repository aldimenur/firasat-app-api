const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  dubber: {
    type: Array,
    default: [
      {
        name: "",
        voice: "",
      },
    ],
  },
  enabled: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
