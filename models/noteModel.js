const mongoose = require("mongoose");
const noteSchema = {
  text: String,
  date: String
};

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
