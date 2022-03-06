const fs = require('fs');

const path = require('path');

function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArr
        }, null, 2)
    )
    return note;
}

function deleteNote(notesArr, id) {
    let deleteId = parseInt(id);
    notesArr.splice(deleteId, 1);


for(let i = deleteId; i < notesArr.length; i++) {
    notesArr[i].id = i.toString();
}

fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({
        notes:notesArr
    }, null, 2)
)
}

module.exports= {
    createNewNote,
    deleteNote
};