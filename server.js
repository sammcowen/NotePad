const express = require('express');

const fs = require('fs');

const htmlroutes = require('./routes/htmlroutes');

const apiroutes = require('./routes/apiroutes');

const path = require('path');

const PORT = 3001;

const app = express();

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiroutes);
app.use('/', htmlroutes);
app.listen(PORT, () => {
    console.log(`API server now  on ${PORT}`);
});