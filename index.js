const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static('public'));

app.get('/getmapkey', (req, res) => {
    res.json({token: process.env.API_KEY})
})

app.listen(process.env.PORT, () => {
    console.log('hello at port ' + process.env.PORT)
})