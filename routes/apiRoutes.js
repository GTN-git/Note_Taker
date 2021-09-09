const router = require("express").Router();
const fs = require("fs");
const path = require("path");

// GET /api/notes
router.get("/notes", (req, res) => {
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
  );
  res.json(notes);
});

// POST /api/notes
router.post("/notes", (req, res) => {
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
  );
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();
  notes.push(req.body);
  //write file sync to the db/db.json file 
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notes),
    "utf8"
  );
  res.json(notes);
});

// DELETE /api/notes/:id
router.delete("/notes/:id", (req, res) => {
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
  );
  const newNotes = notes.filter((note) => note.id !== req.params.id);

  //write file sync to the db/db.json file 
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(newNotes),
    "utf8"
  );
  res.json(newNotes);
});

module.exports = router;
