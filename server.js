const express = require('express');

const fs = require('fs');

const htmlroutes = require('./routes/htmlroutes/index');

const apiroutes = require('./routes/apiroutes/notesroute');

const path = require('path');

const PORT = 3001;

const app = express();


// middleware to attach and read stylesheet without specific endpoint
app.use((express.static('public')));
// middleware to 
app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use('/api', apiroutes);
app.use('/', htmlroutes);
app.listen(PORT, () => {
    console.log(`API server now  on ${PORT}`);
});