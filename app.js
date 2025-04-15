require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts')

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(ex)

app.get('', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`)
})