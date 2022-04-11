const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");
router.route("/create").post((req, res) => {
  const newNote = new Note({
    text: req.body.text,
    date: req.body.date
  });
  console.log("saving");
  newNote.save();
});
router.route("/notes-list").get((req, res) => {
  Note.find().then((foundOne) => res.json(foundOne));
});
router.route("/notes-list/:id").delete((req, res) => {
  Note.findByIdAndDelete({_id : req.params.id}, err=>{if(err) console.log(err)})
}); 

module.exports = router;
