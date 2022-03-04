const router = require('express').Router();

const uniqid = require('uniqid');

const {
     notes
    } = require('../../db/db.json');

const{
    createNewNote,
    deleteNote
}  = require('../../lib/notesFunctions');

// api route that gets and reads notes and returns them as JSON
router.get('/notes', (req, res) => {
    res.json(notes);
});
// api route that receives note on thereq body, adds to the db.json,returns new note
router.post('/notes', (req,res) => {
    req.body.id = uniqid();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req,res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
});



module.exports = router;