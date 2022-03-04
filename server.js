const express = require('express');

const htmlroutes = require('./routes/htmlroutes/index');

const path = require('path');

const PORT = 3001;

const app = express();


// middleware to attach and read stylesheet without specific endpoint
app.use((express.static('public')));
app.use('/', htmlroutes);
app.listen(PORT, () => {
    console.log(`API server now  on ${PORT}`);
});