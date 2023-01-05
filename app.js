const express = require('express');

const app = express();

// CONTROLLERS
const studentsController = require('./controllers/studentsController');

// MIDDLEWARE
app.use('/students', studentsController);

// ROUTES
app.get('/removeVowels/:word', (req, res) => {
    const { word } = req.params;
    const removedVowels = word.replace(/[aeiou]/gi, '');
    res.send(removedVowels);
})

app.get('/multiplyByFive/:num', (req, res) => {
    const { num } = req.params;
    const multipliedByFive = num * 5;
    res.send(String(multipliedByFive));
    // res.json(multipliedByFive);
})

app.get('/', (req, res) => {
    res.send('Hello Student App January backend!');
})

module.exports = app;