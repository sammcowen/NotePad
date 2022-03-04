const express = require('express');

const PORT = 3001;

const app = express();

// homepage route 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
    console.log(`API server now  on ${PORT}`);
});