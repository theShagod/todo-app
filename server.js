const express = require("express");
const app = express();
const path = require('path');
const router = require('./routes/api/api.js')
//const {v4: v4} = require('uuid');


const port = 5050;

//wtf does this do???

app.use(express.json());
app.use(express.urlencoded({extended:false }))




//static page
app.use(express.static('public'))


app.use('/api', router)


app.listen(port, () => {
    console.log(`server running at localhost:${port}`);
});