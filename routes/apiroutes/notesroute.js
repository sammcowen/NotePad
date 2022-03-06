const router = require('express').Router();

const {
     notes
    } = require('../../db/db');
const {
    createNewNote, 
    deleteNote
} = require('../../lib/notesFunctions');


// api route that gets and reads notes and returns them as JSON
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});
// api route that receives note on thereq body, adds to the db.json,returns new note
router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req,res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
});



module.exports = router;