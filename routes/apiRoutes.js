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
  req.body.id = animals.length.toString();

  //write file sync to the db/db.json file and yay done
  
});

module.exports = router;
