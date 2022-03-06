const fs = require('fs');

const path = require('path');

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notes
        }, null, 2)
    )
    return note;
};

function deleteNote(notes, id) {
    let deleteId = parseInt(id);
    notes.splice(deleteId, 1);


for(let i = deleteId; i > notes.length; i++) {
    notes[i].id = i.toString();
}

fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({
        notes:notes
    }, null, 2)
)
}

module.esports= {
    createNewNote,
    deleteNote
};